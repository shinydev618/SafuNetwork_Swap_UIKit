import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADtUlEQVRIiaWWW28bVRSFP9tjx5dc7BScFNqmRRU0gYonHvmt/CEkkCiUtJCmLS0lcXNxHN/iCw/7O/JQRYaIkUbHMz5nrb3W3vucKfDdnBtcG8Bj4GvgNjAGDoF94Heg828A2Q3IVoH7En4DPAAmwDZQAM6BM9/9L8IS8BHwULLHhLpVie4CXWAAFIE/gAvgWuuWERYE3ZLsc+COQPvATznQIrALNFzzjFB7I8IN4DPJbgMrwDtgBAxVNAbKwLpEm8BXQBN4BbxV/VLCgpFuAzuOY+BAwhXC4obzO8BLwvo2cM8A7wA/Ar8C/WWEDeCWUQ+BF8AxkZu+AWwCNUnO/P/cERb247xD/5smwgJQAeqElevAFHgtUEcL65JUVFpyLBrca924ZJGKlNefgWFGFEUZ+FRlqcT/At4TOUilPvP/9Ds9Z5J2CetT1X6pG4+cM8iAb418V2XvgO+B34CTayyfGcCVasa6McvN6QDP/f2IRS1MMi2sAVWV1oFPjHBLwL531aAarilr1wZRvTWVrDmn6LqhuMWM6KkycAS0XPxAxSUnHwF/GsSG0TZVVpWoTfTlujY2tHtKpOgFcJU5ae6fqafaLkiTexIkNamKp65LueyrtGcQLaLAkkNkgqTeagtYclGPKJwOUQhTAZO9M1VfeveJ/I7ErotfTtZmwKkvUk4y75TPlMMu0XM9omBSkaQ2qevKmkG3fL4ymBNglAlW8eVQFUUJ5wLmQUsSFR0LuXEs8ECiaS7oScphK2dpSwtK2pKa/kyAmgpWDKAg0FDlJ67B52JuzWZSeFeAe0RhrOQATiUb+G6kEwOJCs6vOq4KXjH4ls81gxhlKqtLnEr9XDvL5qMhSYp6xuJoqgjaIiq3ngug5vrkyigVTaq8pgBV77ljwXtuQCk/sCiw1GJpG8zvubhmnAE/CNolzr+PXTw0J13JUkOnHKdrxqJdzl0zIXq1rDNHxFY5yIjTuUTsJAfELr9jZGMndyS9RWx7WxJPdSht9Jda3jTAC98fAr9gH46N9A2L02HEopiakr4iNuQdYE/iEXH4Ppe0bsBtIn9vJTsgztPJhwfw0AmXknxBnGkVbX6jRcfmZJhTvy3RfdWfqGpfIVOAwpLv0nXiPNvTyisiR6kdZr5DZXUWaTjOKTvKgy77iLoAnqjgoWr3iAKbCJyv3h5h4bMc0ehD0GWEc0kvWJwYE+Kre1fVc0n2VfTE8ZR/Hsj/iTB/vQeeClIjCmmNyEtHRU+Jz/1rv0fT9TezJTnyp4Vu8QAAAABJRU5ErkJggg==" />
    </Svg>
  );
};

export default Icon;
