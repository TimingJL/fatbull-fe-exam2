import React from 'react';
import styled from 'styled-components';
import { uniqBy } from 'lodash';

import { getUsers } from 'api/index';
import User from './User';
import SkeletonUser from './SkeletonUser';

const pageSize = 20;

const Container = styled.div`
  padding: 32px 16px;
  overflow-y: auto;
  height: calc(100vh - 66px);
  box-sizing: border-box;
  & > *:not(:first-child) {
    margin-top: 16px;
  }
`;

interface IData {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}

const FollowersList = () => {
  const targetRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState<IData[]>([]);
  const [total, setTotal] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0, // Trigger when 50% of the target is visible
    };

    const callback = (entries: { isIntersecting: boolean }[]) => {
      entries.forEach((entry: { isIntersecting: boolean }) => {
        if (entry.isIntersecting) {
          // The target is now in the viewportß
          if (isLoading) return;
          const totalLoaded = pageSize * page;
          if (totalLoaded < total) {
            setPage(page + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, [page, total, isLoading]);

  React.useEffect(() => {
    setIsLoading(true);
    getUsers({
      page,
      pageSize,
    }).then((res) => {
      setIsLoading(false);
      const { data: newData, total } = res.data;
      setData(
        uniqBy(
          [
            ...data,
            ...newData.map((d: IData, index: number) => ({
              ...d,
              avater: `https://picsum.photos/id/${index + 10}/219/146`, // the origin avater link is unavailable.
            })),
          ],
          'id',
        ),
      );
      setTotal(total);
    });
  }, [page]);

  return (
    <Container>
      {data.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <div ref={targetRef} style={{ height: 0 }} />
      {isLoading && (
        <>
          <SkeletonUser />
          <SkeletonUser />
          <SkeletonUser />
          <SkeletonUser />
          <SkeletonUser />
        </>
      )}
    </Container>
  );
};

export default FollowersList;
