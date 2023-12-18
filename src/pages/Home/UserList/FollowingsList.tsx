import React from 'react';
import styled from 'styled-components';
import { getFriends } from 'api/index';

import User from './User';

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

const FollowingsList = () => {
  const targetRef = React.useRef(null);
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState<
    {
      id: string;
      name: string;
      username: string;
      avater: string;
      isFollowing: boolean;
    }[]
  >([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px', // No margin around the root
      threshold: 0, // Trigger when 50% of the target is visible
    };

    const callback = (entries: { isIntersecting: boolean }[]) => {
      entries.forEach((entry: { isIntersecting: boolean }) => {
        if (entry.isIntersecting) {
          // The target is now in the viewport
          const totalLoaded = pageSize * page;
          if (totalLoaded < total) {
            setPage(page + 1);
          }
        } else {
          // The target is no longer in the viewport
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
  }, [page, total]);

  React.useEffect(() => {
    getFriends({
      page,
      pageSize,
    }).then((res) => {
      setData(res.data.data);
      setTotal(res.data.total);
    });
  }, [page]);

  return (
    <Container>
      {data.map((user) => (
        <User key={user.id} user={user} />
      ))}
      <div ref={targetRef} style={{ height: 1 }} />
    </Container>
  );
};

export default FollowingsList;
