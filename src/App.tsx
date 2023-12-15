import styled from 'styled-components';

import SideMenu from 'components/SideMenu';
import ButtonNav from 'components/ButtonNav';
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
      <ButtonNav />
    </Container>
  );
};

export default App;
