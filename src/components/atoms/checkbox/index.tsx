import React, { useState } from "react";
import { IconKey } from "../../../../public/assets/icons";
import { Icon } from "../icon";
import { Container } from "./style";

export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.checked || false);

  const handleClick = () => {
    if (props.disabled) {
      return;
    }

    const newChecked = !checked;
    setChecked(newChecked);
    props.onChange && props.onChange(newChecked);
  };

  return (
    <Container checked={checked} onClick={handleClick}>
      <Icon icon={IconKey.Checkbox} size="m" />
      <Icon icon={IconKey.Check} size="m" />
    </Container>
  );
};
