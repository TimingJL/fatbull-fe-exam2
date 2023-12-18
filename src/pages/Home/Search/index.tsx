import styled from 'styled-components';
import Input from 'components/Input';

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--Greyscale-light, #fff);
  opacity: 0.1;
`;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 725px;
  width: 100%;
  padding: 54px 20px;
  @media ${(props) => props.theme.mobile} {
    padding-top: 0px;
  }
`;

const Label = styled.label`
  color: var(--Greyscale-white, #fff);
  font-size: 24px;
  font-style: normal;
  line-height: 150%; /* 36px */
  text-transform: capitalize;
`;

const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 30px;
`;

const Search = () => {
  return (
    <Container>
      <Content>
        <SearchSection>
          <Label>Search</Label>
          <Input placeholder="keyword" />
        </SearchSection>
        <Divider />
      </Content>
    </Container>
  );
};

export default Search;
