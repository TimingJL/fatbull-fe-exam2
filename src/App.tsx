import styled from 'styled-components';

import SideMenu from 'components/SideMenu';
import BottomNav from 'components/BottomNav';
import Router from './route/Router';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.desktopUp} {
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
