import styled, { css } from 'styled-components';

function stringToUniqueNumber(username: string) {
  let hash = 0;
  if (username.length === 0) {
    return hash;
  }
  for (let i = 0; i < username.length; i++) {
    const charCode = username.charCodeAt(i);
    hash = (hash << 5) - hash + charCode;
    hash |= 0; // Convert to 32-bit integer
  }
  hash = ((hash % 61) + 61) % 61;
  return hash;
}

const Fullname = styled.div`
  color: var(--White, #fff);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
`;

const Username = styled.div`
  color: var(--White, #fff);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: 0.25px;
  opacity: 0.5;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
`;

const Avater = styled.img`
  outline: 1px solid var(--GreyScale-50, #f8f8f8);
  border-radius: 5px;
  object-fit: cover;
  box-sizing: content-box;
  height: 40px;
  width: 40px;
`;

const activeChip = css`
  background-color: #fff;
  color: #000;
  height: 28px;
`;

const inactiveChip = css`
  background-color: transparent;
  color: #fff;
`;

const Chip = styled.div<{
  $isActive: boolean;
}>`
  border-radius: 50px;
  border: 1px solid #fff;
  padding: 8px 10px;
  font-size: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  .chip__text {
    height: 13px;
  }
  ${(props) => (props.$isActive ? activeChip : inactiveChip)}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 45px;
`;

interface IProps {
  user: {
    id: string;
    name: string;
    username: string;
    avater: string;
    isFollowing: boolean;
  };
}

const User = (props: IProps) => {
  const { user } = props;

  return (
    <Container>
      <Row>
        <Avater
          // src={user.avater} // TODO: replace with real avater, current url is unavailable.
          src={`https://i.pravatar.cc/150?img=${stringToUniqueNumber(user.name)}`}
          alt={user.name}
          width={40}
          height={40}
        />
        <div>
          <Fullname>{user.name}</Fullname>
          <Username>{`@${user.username}`}</Username>
        </div>
      </Row>
      <Chip $isActive={user.isFollowing}>
        <div className="chip__text">{user.isFollowing ? 'Following' : 'Follow'}</div>
      </Chip>
    </Container>
  );
};

export default User;
