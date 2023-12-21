import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { ArrowLeft } from 'components/Icons/ArrowLeft';
import { getTags } from 'api/index';
import { routePathConfig } from 'route/config';
import Card from './Card';
import Skeleton from './Skeleton';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Content = styled.div`
  max-width: 725px;
  width: 100%;
  padding: 80px 20px 20px;
  @media ${(props) => props.theme.mobile}, ${(props) => props.theme.tablet} {
    padding-top: 0px;
  }
`;

const PageTitle = styled.div`
  font-size: 30px;
  line-height: 1.5;
  display: flex;
`;

const TagsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 36px 24px;
  padding-top: 24px;
  @media ${(props) => props.theme.mobile}, ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const BackButton = styled(ArrowLeft)`
  cursor: pointer;
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

interface ITag {
  id: string;
  count: string;
  name: string;
}

const Tags = () => {
  const navigate = useNavigate();
  const [tags, setTags] = React.useState<ITag[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    setLoading(true);
    getTags().then((res) => {
      setLoading(false);
      const { data } = res;
      setTags(data);
    });
  }, []);

  return (
    <>
      <HeaderBackButton>
        <BackButton onClick={() => navigate(routePathConfig.home)} />
        Home Page
      </HeaderBackButton>
      <Container>
        <Content>
          <PageTitle>Tags</PageTitle>
          <TagsGrid>
            {tags.map((tag) => (
              <Card key={tag.id} tag={tag} />
            ))}
            {loading && (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            )}
          </TagsGrid>
        </Content>
      </Container>
    </>
  );
};

export default Tags;
