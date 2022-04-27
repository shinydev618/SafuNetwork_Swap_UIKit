import React from "react";
import styled from "styled-components";
import { Box, Flex } from "../../../components/Box";

// import Icon1 from '../img/Telegram.png'
// import Icon2 from '../img/Twitter.png'
// import Icon3 from '../img/Email.png'

const FlexContainer = styled(Flex)`
  position: fixed;
  bottom: 20px;
  right: 30px;
  color: red;
  >div {
    &:hover {
      cursor: pointer;
      >img {
        opacity: .8;
      }
    }
  }
  >div+div {
    margin-left: 10px;
  }
`

interface Props {
  imgs: any;
}

const SocialLinks: React.FC<Props> = ({ imgs }) => (
  <FlexContainer>
    <Box>
      <img src={imgs && imgs[0]} width='20px' />
    </Box>
    <Box>
      <img src={imgs && imgs[1]} width='20px' />
    </Box>
    <Box>
      <img src={imgs && imgs[2]} width='20px' />
    </Box>
  </FlexContainer>
);

export default React.memo(SocialLinks, () => true);
