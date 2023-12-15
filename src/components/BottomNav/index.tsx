import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import { TabIcon } from 'components/Icons/TabIcon';
import { routePathConfig } from 'route/config';
import backgroundSrc from 'assets/Background.png';

const activeTab = css`
  fill: #fff;
  color: #fff;
`;

const Tab = styled.div<{
  $isActive: boolean;
}>`
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  color: #6a6a6a;
  ${(props) => props.$isActive && activeTab}
  &:hover {
    ${activeTab}
  }
`;

const Container = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${backgroundSrc});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 66px;
    fill: rgba(24, 24, 24, 0.2);
    box-shadow: 0px 0.5px 0px 0px rgba(0, 0, 0, 0.8) inset;
    backdrop-filter: blur(27.182817459106445px);
    gap: 50px;
  }
`;

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Container>
      <Tab $isActive={pathname === routePathConfig.home} onClick={() => navigate(routePathConfig.home)}>
        <TabIcon />
      </Tab>
      <Tab $isActive={pathname === routePathConfig.tags} onClick={() => navigate(routePathConfig.tags)}>
        <TabIcon />
      </Tab>
    </Container>
  );
};

export default BottomNav;
