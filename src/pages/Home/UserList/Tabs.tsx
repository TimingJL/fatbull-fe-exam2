import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 32px;
`;

const Option = styled.div<{
  $isActive: boolean;
}>`
  color: ${(props) => (props.$isActive ? '#FFF' : '#929292')};
  font-weight: ${(props) => (props.$isActive ? 700 : 400)};
  text-align: center;
  font-size: 16px;
  border-bottom: ${(props) => (props.$isActive ? '2px solid #FFF' : '2px solid transparent')};
  padding-bottom: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

interface IProps {
  activeTab: string;
  options: {
    key: string;
    name: string;
  }[];
  onChange: (key: string) => void;
}

const Tabs = (props: IProps) => {
  const { activeTab, options, onChange } = props;
  return (
    <Container>
      {options.map((option) => (
        <Option key={option.key} $isActive={activeTab === option.key} onClick={() => onChange(option.key)}>
          {option.name}
        </Option>
      ))}
    </Container>
  );
};

export default Tabs;
