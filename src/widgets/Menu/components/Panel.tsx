import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

// import SidebarBack from '../img/SidebarBack.png'
import PanelHeader from "./PanelHeader";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
  imgs: any;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean; back: any; }>`
  position: fixed;
  z-index: 2;
  // padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-size: 100% 100%;
  background: rgb(249 188 53);
  width: ${({ isPushed }) => (isPushed ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100vh;
  transition: padding-top 0.2s, width 0.2s;
  z-index: 11;
  overflow: ${({ isPushed }) => (isPushed ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu, imgs, isDark } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu} back={(!isDark && imgs) && imgs[0]}>
      {/* <PanelHeader imgs={imgs && [imgs[1], imgs[2]]} /> */}
      <PanelBody {...props} />
      {/* <PanelFooter {...props} /> */}
    </StyledPanel>
  );
};

export default Panel;
