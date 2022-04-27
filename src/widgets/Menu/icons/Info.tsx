import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADNElEQVRIib3We28bVRAF8J+ddR3SEEJDksZKQ3mWtqgSr8/L50FCglJeLbRRIW1oSkpSk8aPxOaPmdUmjh2riDLSalf2vXNmzsydc2u+HBqxGbyJt/EermIJF3CEfr5rKPKZQRc7eID72MJzDE46L0bAGriEdbyLFuYxRCefQ/QSsInX8g0LuJL/zeAR9jLAsYBLuIUbeCuz2cFT7KONgwSUQPP5vIEVrOJyBvsDvsfuScBa0tXCTXyMRfyFTTzEk4y0j+Pc40QmjQRs4R1RjvUMqIGf00e/SEqW8VkCzibIbfySmfWT1mY6nk+wgwykne9tUb8Pk6k1fJFUf4dnBd7PaG6mo1/xdYI9H6F8Nmm7nIBPRbN0RHN08IeocwefiF74FHPYLjKS1XS2ia+S+76zVk/6m/ndyPeo7ePb9NHEtQRfL0TrN/E4aXw4AUz+vpcgtfzuTVjbE116V9X5jbKGHfwkeG5PcEA0TFfUrpb7js9Zv5+AF8skiozyQHTReWAE7auiG+uiXi/yGWfd9HtHdP1Mgd9FkQ+mgBFstPCROA6F6Mzdc/Z0xdTZQa3ICLoJOs3qot5zCVg2z3k2SN+HMsK2aj5Os6Go2dGJ7zPDeFrEx/kMpqz9T2waHeNsKIIbesnsqKRl8C/BX9oK0QC9BP5fAFdEBz16RRh1lVDXCmyIM3j/FQFeEMN+DfVCzLk5MUE2TZ4axDirC/rrpte9IUT9Bq6XgN2M4gNxJu+JGTgJsMj1JU3ngS6olGID3UJQuSym+SAzbBt/LgeiwQ4TrDdhHcHCWgK2MrHdQkjSFXwuxLifmWw6O1/Lm9msaniPG4mvC9krM/tbCPp2IRS+nelfz4XlPedBgpaj7EDo5bNc005nVIK8kD5uZSKHiXG7zLAjBvg3md21zHRRXIa2VIrQEUJdCnA5MC6KsrQyo43cvyd09kdx7LqFqm73Mppugi6lo5UE+VM00wvVoG+Ie9DiCcBlUb8nCXYnA8bpe+kg/+iLy9HVBLuU4Ecqse3mntkMqpSrQQa2LXpgy4hWjl6Ee6IpjlQytCbqMpcZNZ2+CM/m751k4LGo829J6akryD8z6/QZVnueXwAAAABJRU5ErkJggg==" />
    </Svg>
  );
};

export default Icon;
