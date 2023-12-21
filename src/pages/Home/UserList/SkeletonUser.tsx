import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  gap: 15px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.06);
  outline: 1px solid rgba(255, 255, 255, 0.06);
`;

const Text = styled.div`
  width: 120px;
  height: 13px;
  background: rgba(255, 255, 255, 0.06);
  outline: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 5px;
`;

const SkeletonUser = () => {
  return (
    <Row>
      <Avatar />
      <Content>
        <Text />
        <Text style={{ width: '60px' }} />
      </Content>
    </Row>
  );
};

export default SkeletonUser;
