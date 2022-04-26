import React from "react";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark }) => (
  <Button variant="text">
    {/* alignItems center is a Safari fix */}
    <Flex alignItems="center">
      {isDark ?
        <MoonIcon color="themeSwitcherColor" width="24px" />
        :
        <SunIcon color="themeSwitcherColor" width="24px" />
      }
    </Flex>
  </Button>
);

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
