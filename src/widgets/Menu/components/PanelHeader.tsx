import React from 'react'
import { Box } from '../../../components/Box'
import styled from 'styled-components'

// import AstroLight from '../img/Astronaut-Light.png'

interface Props {
    imgs: any;
}

const StyledContainer = styled(Box)`
    user-select: none;
    pointer-events: none;
    z-index: 1;
`

const PanelHeader: React.FC<Props> = ({ imgs }) => {
    return (
        <StyledContainer position='absolute'>
            <img src={imgs && imgs[0]} alt='' width='352px' />
        </StyledContainer>
    )
}

export default PanelHeader