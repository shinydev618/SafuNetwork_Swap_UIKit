import React from "react";
import CyanToggle, { Input, Handle } from "./CyanToggle";
import { ToggleProps, scales } from "./types";

const Toggle: React.FC<ToggleProps> = ({ checked, scale = scales.MD, ...props }) => {
  const isChecked = !!checked;

  return (
    <CyanToggle checked={isChecked} scale={scale}>
      <Input checked={checked} scale={scale} {...props} type="checkbox" />
      <Handle scale={scale} />
    </CyanToggle>
  );
};

Toggle.defaultProps = {
  scale: scales.MD,
};

export default Toggle;
