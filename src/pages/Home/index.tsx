import styled from 'styled-components';

import Search from './Search';
import UserList from './UserList';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Home = () => (
  <Container>
    <Search />
    <UserList />
  </Container>
);

export default Home;
