import React from 'react';
import styled from 'styled-components';
import { LogoIcon } from '../../../components/Svg';

const Container = styled.div`
    padding: 30px;
    display: flex;
`;

const LogoText = styled.span`
    color: ${({ theme }) => theme.colors.logoTextColor};
    font-size: 45px;
    margin-left: 10px;
    font-family: Comic Sans MS;
    font-weight: bold;
`;

const PanelHeader: React.FC = () => {
    return (
        <Container>
            <LogoIcon className="header-logo-icon" width='55px' height='55px' />
            <LogoText>Birb</LogoText>
        </Container>
    );
}

export default PanelHeader;