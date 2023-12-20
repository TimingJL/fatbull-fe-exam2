import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

import Search from './Search';
import Result from './Result';
import UserList from './UserList';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
`;

const Home = () => {
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');

  return (
    <Container>
      {keyword ? <Result keyword={keyword} /> : <Search />}
      <UserList />
    </Container>
  );
};

export default Home;
