import React from "react";
import { PanelProps, PushedProps } from "../types";
interface Props extends PanelProps, PushedProps {
    showMenu: boolean;
    isMobile: boolean;
    imgs: any;
}
declare const Panel: React.FC<Props>;
export default Panel;
