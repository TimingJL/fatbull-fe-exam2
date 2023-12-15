import styled, { css } from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import { TabIcon } from 'components/Icons/TabIcon';
import { routePathConfig } from 'route/config';

const activeTab = css`
  fill: #fff;
  color: #fff;
  .tab__text {
    opacity: 1;
  }
`;

const containerMobile = css`
  width: 100%;
  height: 70px;
  padding: 0px 21px;
  display: flex;
  align-items: center;
  background: #181818;
`;

const Logo = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  .tab__text {
    line-height: 1.5;
    font-size: 12px;
    opacity: 0;
    letter-spacing: 0.4px;
  }
  &:hover {
    ${activeTab}
  }
  ${(props) => props.$isActive && activeTab}
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const GradientText = styled.div`
  background: var(--Tutor-Gradient---Light, linear-gradient(270deg, #ffd25f 0.13%, #ff5c01 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  width: fit-content;
  font-weight: 700;
  font-size: 13px;
`;

const Container = styled.div`
  width: 88px;
  height: 100vh;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  flex: 0 0 auto;
  box-sizing: border-box;
  background: #1b1b1b;
  @media ${(props) => props.theme.mobile} {
    ${containerMobile}
  }
`;

const SideMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Container>
      <Logo>
        <GradientText>LOGO</GradientText>
      </Logo>
      <Tab $isActive={pathname === routePathConfig.home} onClick={() => navigate(routePathConfig.home)}>
        <TabIcon />
        <div className="tab__text">Home</div>
      </Tab>
      <Tab $isActive={pathname === routePathConfig.tags} style={{ marginTop: '6px' }} onClick={() => navigate(routePathConfig.tags)}>
        <TabIcon />
        <div className="tab__text">Tags</div>
      </Tab>
    </Container>
  );
};

export default SideMenu;
