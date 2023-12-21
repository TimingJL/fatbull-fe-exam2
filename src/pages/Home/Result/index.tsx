import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { uniqBy } from 'lodash';

import { ArrowLeft } from 'components/Icons/ArrowLeft';
import { getUsers } from 'api/index';
import { routePathConfig } from 'route/config';
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Skeleton from './Skeleton';

const BackButton = styled(ArrowLeft)`
  cursor: pointer;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  overflow-y: auto;
`;

const Content = styled.div`
  max-width: 725px;
  width: 100%;
  padding: 92px 20px 20px;
  @media ${(props) => props.theme.mobile}, ${(props) => props.theme.tablet} {
    padding-top: 0px;
  }
`;

const HeaderBackButton = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile}, ${(props) => props.theme.tablet} {
    display: flex;
    align-items: center;
    font-size: 24px;
    gap: 13px;
    background: #181818;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 70px;
    z-index: 1;
    padding: 0px 20px;
  }
`;

const PageTitle = styled.div`
  font-size: 30px;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 25px;
  position: relative;
  left: -45px;
  @media ${(props) => props.theme.mobile}, ${(props) => props.theme.tablet} {
    left: 0px;
    font-size: 24px;
    .page-title__desktop-back-button {
      display: none;
    }
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px 34px;
  padding-top: 24px;
  img {
    width: 100%;
    min-width: 219px;
    aspect-ratio: 219/146;
    background: rgba(255, 255, 255, 0.06);
  }
  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
`;

const Title = styled.div`
  font-size: 14.9px;
  margin-top: 12px;
  line-height: 22px;
`;

const Username = styled.div`
  font-size: 11.175px;
  color: #b2b2b2;
  line-height: 17px;
`;

interface IData {
  id: string;
  name: string;
  username: string;
  avater: string;
  isFollowing: boolean;
}

interface IProps {
  keyword: string;
  pageSize?: number;
}

const Result = (props: IProps) => {
  const { keyword, pageSize = 9 } = props;
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const [data, setData] = React.useState<IData[]>([]);
  const [total, setTotal] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const { targetRef } = useIntersectionObserver({
    onEntryIntersect: () => {
      if (isLoading) return;
      const totalLoaded = pageSize * page;
      if (totalLoaded < total) {
        setPage(page + 1);
      }
    },
  });
  const hasDataToLoad = data.length < total;

  React.useEffect(() => {
    setIsLoading(true);
    getUsers({
      page,
      pageSize,
      keyword,
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
  }, [page, keyword]);

  return (
    <>
      <HeaderBackButton>
        <BackButton onClick={() => navigate(routePathConfig.home)} />
        Home Page
      </HeaderBackButton>
      <Container>
        <Content>
          <PageTitle>
            <BackButton className="page-title__desktop-back-button" onClick={() => navigate(routePathConfig.home)} />
            Results
          </PageTitle>
          <ResultsGrid>
            {data.map((d) => (
              <div key={d.id}>
                <img src={d.avater} alt={d.name} />
                <Title>{d.name}</Title>
                <Username>by {d.username}</Username>
              </div>
            ))}
            {hasDataToLoad && <div ref={targetRef} style={{ height: 0 }} />}
            {isLoading && (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </ResultsGrid>
        </Content>
      </Container>
    </>
  );
};

export default Result;
