import styled from 'styled-components';

const Chip = styled.div`
  height: 50px;
  max-width: 135px;
  border-radius: 8px;
  border: 4px solid #fff;
  padding: 0px 14px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 14px;
`;

const ChipText = styled.div`
  max-width: 107px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
`;

const TagName = styled.div`
  font-size: 14.9px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 143px;
  margin-top: 10px;
`;

const Count = styled.div`
  font-size: 11.175px;
  color: #b2b2b2;
  line-height: 17px;
`;

const Container = styled.div`
  width: 100%;
  height: 150px;
  min-width: 150px;
  background: rgba(255, 255, 255, 0.06);
  border-radius: 8px;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
`;

interface ITag {
  id: string;
  count: string;
  name: string;
}

interface IProps {
  tag: ITag;
}

const Card = (props: IProps) => {
  const { tag } = props;
  return (
    <div>
      <Container>
        <Chip>
          <ChipText>{tag.name}</ChipText>
        </Chip>
      </Container>
      <TagName>{tag.name}</TagName>
      <Count>{`${tag.count} Questions`}</Count>
    </div>
  );
};

export default Card;
