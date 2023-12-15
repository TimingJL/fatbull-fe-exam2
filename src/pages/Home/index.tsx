import styled from 'styled-components';

import UserList from './UserList';

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;

const Home = () => (
  <Container>
    Home
    <UserList />
  </Container>
);

export default Home;
