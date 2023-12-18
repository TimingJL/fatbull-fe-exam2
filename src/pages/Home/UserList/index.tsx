import React from 'react';

import styled from 'styled-components';

import List from './List';
import Tabs from './Tabs';

const Container = styled.div`
  width: 375px;
  display: none;
  @media ${(props) => props.theme.desktopUp} {
    display: block;
  }
`;

const options = [
  {
    key: 'followers',
    name: 'Followers',
  },
  {
    key: 'following',
    name: 'Following',
  },
];

const UserList = () => {
  const [activeTab, setActiveTab] = React.useState(options[0].key);
  return (
    <Container>
      <Tabs activeTab={activeTab} options={options} onChange={(value) => setActiveTab(value)} />
      <List />
    </Container>
  );
};

export default UserList;
