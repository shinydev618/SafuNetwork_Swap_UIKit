import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isPushed?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean, isActive:boolean; }>`
  color: ${({ isActive, isPushed, theme }) => (isPushed ? (isActive ? theme.colors.sidebarSelectedColor : theme.colors.sidebarColor) : "transparent")};
  transition: color 0.4s;
  flex-grow: 1;
  font-size: 16px;
  font-family: Rflex_Regular;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  margin: ${({ secondary }) => (secondary ? "0 32px" : "0 16px")};
  padding: ${({ isPushed }) => (isPushed ? "0 9px" : "0 12px")};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  border-radius: 10px;
  background-color: ${({ secondary, isActive,  theme }) => {
    return (isActive) ? theme.colors.sidebarSelectedBg : "transparent" ;
  }};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.sidebarSelectedColor : theme.colors.sidebarColor)};

  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ isActive, theme }) => (isActive ? theme.colors.sidebarSelectedColor : theme.colors.sidebarColor)};
  }

  &:hover {
    // background-color: ${({ theme }) => theme.colors.tertiary};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  role: "button",
};

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive);

export { MenuEntry, LinkLabelMemo as LinkLabel };
