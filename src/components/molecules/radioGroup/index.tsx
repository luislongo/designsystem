import React, { useEffect } from "react";
import { Radio } from "../../atoms/radio";
import { Container } from "./style";

export interface RadioGroupProps {
  items: string[];
  currentChecked?: number;
  disabled?: boolean;
  onItemSelected?: (index: number) => void;
}

export const RadioGroup: React.FC<RadioGroupProps> = (props) => {
  const [currentChecked, setCurrentChecked] =
    React.useState<number | undefined>();

  useEffect(() => {
    setCurrentChecked(props.currentChecked);
  }, [props.currentChecked]);

  const handleChange = (index: number) => {
    setCurrentChecked(index);
    props.onItemSelected && props.onItemSelected(index);
  };

  const isChecked = (index: number) => index === currentChecked;

  return (
    <Container>
      {props.items.map((item, index) => (
        <li onClick={() => handleChange(index)}>
          <Radio
            onChange={() => handleChange(index)}
            disabled={props.disabled}
            checked={isChecked(index)}
          />
          <label>{item}</label>
        </li>
      ))}
    </Container>
  );
};
