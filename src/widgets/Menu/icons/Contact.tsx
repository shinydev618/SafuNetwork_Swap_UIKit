import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <image width="28" height="28" xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAD1UlEQVRIia3W229UZRQF8N8wA4VSirWIQAUFinKRgggBRS0qanwQ++S7/0n/DN98981IFGMCEUFapVGUgBewRZCCCGUE6tDpxYe9W06wFzHu5OTMmXPOt/baa31rpuT9CTNUM17C82hDFUdxDFdmemmumjfD943YjN15/V0CPos9aPo/ASvYitfy82d4Dx/m/U7s/a+g0wEuwi5sRA96cQff4xPU8Lpgu7Dw3jIx+uYZ1p1ic3+NYhjjWIoFeX0XJ1EW2u7LRk5iJfZjHX7CYVydDrCsq3s6wDoa8GQyvoK/8vtLeW9Psr2NF9CBVXg4idzIe3MCwhBuYq0wTwm/ZDONyWRdXrdhG37AcczH9jxfzKbmBBxPwNt4DOuFLiXsEBo2Cb2acQ5HhM5VPILHk+nVIuh0Gk7WKPqy01fxYjJuzXMFf+AUPkU/JnA6G35XaH0mm8csbipUHz7OztsT6LzQ9DQOYSDBJuvPvF8Wppuq2RhOVj1Z1LBFGKksRvh5MivWauHYCZxwn1v/DUPCKHfEeJdiEAeFZsVaLhz7tGB9RIx9qmZjWMr7bcIAG0X61EUYXL/v+Va8gufElhicbtHZAFuwM4EWiVS5lufNwgh9QtsWvJWA84XhOkUgHCqCzwa4FC/nS3151MXm3iiSZlxo2CH2XptIpVGh81ah5WH8OhfgKMZEpP0mIuyWcN0uvClsvyWBagUmJ4WTd4pfnIrI4ctlXd1loVfJPROVEvC2COWVCXYJI0K/BqHXEyJRSsJYR/FFMq+KqOvAYgxV8uJOjqI5F25IJmeFJm/gQH7fk4305lgb8/N2rMDlAtOfhYYL8BRGKvnSYB6rRVA3CYt/i2/y5QPCFLUEqArrl0WaNAh9d+QkLgiNz+ZU3sHuefnQiqTchEeFK5tSq2UJ8FE+sz+n0iJMVBfJ8pUIiHXCsevdq/NiqyypZBdLhLBD2cBFkf6dwhwHhUsfEj+8b4voWpTPjeaCx3PE23LdMZE0G5LIYFlX9zNC2Kqwbruw8o9C07ZkO1wYz05h+QGRJteSyc2UpFVEYEuu0Zlr9JV1dS/HmnzhTD6wNhc+leNak1Poz+NuNvi1+IM1VhjfrWS1JKfRkRM4ihNlXd31HMMqsS0GhMU3JNNaglfFfryR54E8hv2zqinP4lyrV/y9vF7JMR5L0F3Z4Zm83iT23IXseiQXHJ4BqFj9+ECM9VpOSkW4rB9fCkfuFduhJztcJTZ3q9BoaA6gYt3IY6omo21UGGKhEHiT2Fc3xVhn/Hv+oFXM0powSUXkXzt+F8lxzoOzm7b+Bik5F8y0UqP5AAAAAElFTkSuQmCC" />
    </Svg>
  );
};

export default Icon;
