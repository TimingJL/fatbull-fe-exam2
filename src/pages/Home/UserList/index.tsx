import styled from 'styled-components';

const Container = styled.div`
  width: 375px;
  display: none;
  @media ${(props) => props.theme.desktopUp} {
    display: block;
  }
`;

const UserList = () => {
  return <Container>UserList</Container>;
};

export default UserList;
