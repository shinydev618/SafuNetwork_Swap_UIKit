import React from 'react';
import styled from "styled-components";
import { scales } from "../Checkbox/types";
import { ToggleProps, HandleProps, InputProps, ScaleKeys } from "./types";

const scaleKeyValues = {
  sm: {
    handleHeight: "16px",
    handleWidth: "16px",
    handleLeft: "2px",
    handleTop: "2px",
    checkedLeft: "calc(100% - 18px)",
    toggleHeight: "20px",
    toggleWidth: "46px",
  },
  md: {
    handleHeight: "32px",
    handleWidth: "32px",
    handleLeft: "4px",
    handleTop: "4px",
    checkedLeft: "calc(100% - 36px)",
    toggleHeight: "40px",
    toggleWidth: "72px",
  },
};

const getScale = (property: ScaleKeys) => ({ scale = scales.MD }: ToggleProps) => {
  return scaleKeyValues[scale][property];
};

const Container = styled.div<HandleProps>`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border-radius: 50%;
  cursor: pointer;
  height: ${getScale("handleHeight")};
  left: ${getScale("handleLeft")};
  position: absolute;
  top: ${getScale("handleTop")};
  transition: left 200ms ease-in;
  width: ${getScale("handleWidth")};
  z-index: 1;
  >div {
    width:60%;
    height:60%;
    border-radius:50%;
    background-color: ${({ theme }) => theme.colors.themeSwitcherColor};
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
  }
`;

export const Handle: React.FC<HandleProps> = ({ ...props}:any) => {
  return (
    <Container {...props}>
      <div></div>
    </Container>
  );
};


export const Input = styled.input<InputProps>`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Container} {
    left: ${getScale("checkedLeft")};
  }

  &:focus + ${Container} {
    // box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Container}:not(:disabled):not(:checked) {
    // box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const CyanToggle = styled.div<ToggleProps>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "success" : "toggleBg"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: ${getScale("toggleHeight")};
  position: relative;
  transition: background-color 200ms;
  width: ${getScale("toggleWidth")};
`;

export default CyanToggle;
