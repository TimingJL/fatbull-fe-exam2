import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Input from 'components/Input';
import Slider from 'components/Slider';
import { Button } from 'components/styled';
import { routePathConfig } from 'route/config';

const options = [3, 6, 9, 12, 15, 50];

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
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 30px;
  @media ${(props) => props.theme.mobile} {
    padding-bottom: 0px;
    border: none;
  }
`;

const PageSizeSection = styled.div`
  padding-top: 30px;
  @media ${(props) => props.theme.mobile} {
    padding-top: 28px;
  }
`;

const SubmitSection = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 30px;
  padding-top: 335px;
  @media ${(props) => props.theme.mobile} {
    margin-top: 218px;
    padding-top: 80px;
  }
`;

const Result = styled.div`
  display: flex;
  align-items: flex-end;
  margin: 20px 0px;
  .result__number {
    font-size: 48px;
    font-weight: 700;
    height: 50px;
  }
  .result__unit {
    font-size: 16px;
    height: 24px;
    letter-spacing: 0.15px;
    margin-left: 10px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 5px;
  }
`;

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = React.useState('');
  const [resultsPerPage, setResultsPerPage] = React.useState<number>();

  const handleOnSubmit = () => {
    navigate({
      pathname: routePathConfig.home,
      search: createSearchParams({
        keyword: keyword,
      }).toString(),
    });
  };
  return (
    <Container>
      <Content>
        <SearchSection>
          <Label>Search</Label>
          <Input placeholder="keyword" onChange={(event) => setKeyword(event.target.value)} />
        </SearchSection>
        <PageSizeSection>
          <Label># of results per page</Label>
          <Result>
            <div className="result__number">{options[resultsPerPage || 0]}</div>
            <div className="result__unit">results</div>
          </Result>
          <div>
            <Slider options={options} onChange={(value) => setResultsPerPage(value)} />
          </div>
        </PageSizeSection>
        <SubmitSection>
          <Button onClick={handleOnSubmit}>Search</Button>
        </SubmitSection>
      </Content>
    </Container>
  );
};

export default Search;
