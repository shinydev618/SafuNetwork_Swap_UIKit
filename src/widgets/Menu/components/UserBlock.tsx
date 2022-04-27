import React from "react";
import styled from 'styled-components'
import { Box, Flex } from "../../../components/Box";
import Button from "../../../components/Button/Button";
import { useWalletModal } from "../../WalletModal";
import { Login } from "../../WalletModal/types";

// import LightCreate from '../img/LightCreate.png'
// import GearIcon from '../img/GearIcon.png'

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  imgs: any;
  isDark?: boolean;
}

const FlexContainer = styled(Flex)`
  >*+* {
    margin-left: 30px;
  }
  >div:first-of-type {
    font-size: 15.32px;
    color: ${({ theme }) => theme.colors.text};
    text-shadow: 0 0 10px ${({ theme }) => theme.colors.shadow1}, 0 0 10px ${({ theme }) => theme.colors.shadow1};
  }
`

const GearBox = styled(Box)`
  height: 30px;
  background: ${({ theme }) => theme.colors.gearBack};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 7px;
`

const UserBlock: React.FC<Props> = ({ account, login, logout, imgs, isDark }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account);
  const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
  return (
    <FlexContainer alignItems='center'>
      <Box>BSC</Box>
      {account ? (
        <Button
          scale="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          scale="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          CONNECT TO A WALLET
        </Button>
      )}
      {!isDark ?
        <img src={imgs && imgs[0]} height='30' />
        :
        <img src={imgs && imgs[1]} height='30' />
      }
      <GearBox>
        <img src={imgs && imgs[2]} height='25' />
      </GearBox>
    </FlexContainer>
  );
};

export default React.memo(UserBlock, (prevProps, nextProps) => prevProps.account === nextProps.account);
