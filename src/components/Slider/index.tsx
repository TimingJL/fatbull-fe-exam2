import React from 'react';
import styled, { css } from 'styled-components';

const SIZE_THUMB = 26;

const railStyle = css`
  background: rgba(255, 255, 255, 0.3); /* rail color */
  width: 100%;
  height: 6px;
  border-radius: 5px;
`;

const trackStyle = css`
  background: linear-gradient(to right, #ff5c01, #ffd05d); /* track color */
  border-radius: 5px;
  height: 6px;
`;

const StyledSlider = styled.input<{
  $widthRatio: number;
}>`
  &[type='range'] {
    -webkit-appearance: none;
    outline: none;
    position: relative;
    z-index: 0;
    ${railStyle}

    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: ${(props) => props.$widthRatio}%;
      left: 0px;
      ${trackStyle}
    }
  }

  &[type='range']::-webkit-slider-thumb {
    /* thumb style */
    -webkit-appearance: none;
    width: ${SIZE_THUMB}px;
    height: ${SIZE_THUMB}px;
    border-radius: 50%;
    background: #000;
    border: 5px solid #ffd05d;
    cursor: pointer;
    transition:
      box-shadow 0.2s ease-in-out,
      transform 0.1s ease-in-out;
  }
`;

const DataList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 16px;
  box-sizing: border-box;
  .datalist__item {
    width: 20px;
    text-align: center;
  }
`;

const ListItem = styled.div<{
  $active: boolean;
}>`
  color: ${(props) => (props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)')};
`;

interface IProps {
  min?: number;
  max?: number;
  value?: number;
  options?: number[];
  onChange?: (value: number) => void;
}

const Slider = (props: IProps) => {
  const sliderRef = React.useRef(null);
  const { onChange, max = 100, value = 0, options = [3, 6, 9, 12, 15, 50] } = props;
  const step = 100 / (options.length - 1);
  const defaultValue = options.indexOf(value) * step;
  const [currentValue, setCurrentValue] = React.useState(defaultValue);
  const activeIndex = (currentValue + step) / step - 1;
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event?.target?.value);
    setCurrentValue(value);
  };

  React.useEffect(() => {
    if (onChange) {
      onChange(options[activeIndex]);
    }
  }, [currentValue, activeIndex, onChange]);

  return (
    <>
      <StyledSlider
        ref={sliderRef}
        {...props}
        type="range"
        value={currentValue}
        $widthRatio={(currentValue / max) * 100}
        min={0}
        max={100}
        step={step}
        onChange={handleOnChange}
      />
      <DataList>
        {options.map((item, index) => (
          <ListItem key={item} className="datalist__item" $active={index === activeIndex}>
            {item}
          </ListItem>
        ))}
      </DataList>
    </>
  );
};

export default Slider;
