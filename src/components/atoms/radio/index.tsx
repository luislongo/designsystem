import React, { useEffect, useState } from "react";
import { IconKey } from "../../../../public/assets/icons";
import { Icon } from "../icon";
import { Container } from "./style";

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const Radio: React.FC<RadioProps> = (props) => {
  const [checked, setChecked] = useState<boolean>(props.checked || false);

  useEffect(() => {
    setChecked(props.checked || false);
  }, [props.checked]);

  const handleClick = () => {
    if (props.disabled || checked) {
      return;
    }

    const newChecked = !checked;
    setChecked(newChecked);
    props.onChange && props.onChange(newChecked);
  };

  return (
    <Container checked={checked} onClick={handleClick}>
      <Icon icon={IconKey.Radiobox} size="m" />
      <Icon icon={IconKey.Radio} size="m" />
    </Container>
  );
};
