import styled from 'styled-components';

import SideMenu from 'components/SideMenu';
import BottomNav from 'components/BottomNav';
import Router from './route/Router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
  }
`;

const App = () => {
  return (
    <Container>
      <SideMenu />
      <Router />
      <BottomNav />
    </Container>
  );
};

export default App;
