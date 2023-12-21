import styled from 'styled-components';

const Container = styled.div`
  .skeleton__image {
    width: 100%;
    min-width: 219px;
    aspect-ratio: 219/146;
    background: rgba(255, 255, 255, 0.06);
  }
  .skeleton__title {
    width: 100px;
    height: 16px;
    background: rgba(255, 255, 255, 0.06);
    margin-top: 16px;
    border-radius: 50px;
  }
  .skeleton__count {
    width: 69px;
    height: 12px;
    background: rgba(255, 255, 255, 0.06);
    margin-top: 8px;
    border-radius: 50px;
  }
`;

const Skeleton = () => {
  return (
    <Container>
      <div className="skeleton__image"></div>
      <div className="skeleton__title"></div>
      <div className="skeleton__count"></div>
    </Container>
  );
};

export default Skeleton;
