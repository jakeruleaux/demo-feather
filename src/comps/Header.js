import React from 'react';
import styled, { keyframes } from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, far } from '@fortawesome/free-regular-svg-icons'

library.add(fab, far, faEnvelope)

const fadeIn = keyframes `
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
`;

const HeaderContainer = styled.div `
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    animation-name: ${fadeIn};
            animation-duration: 10s;
            transition-timing-function: ease-out;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <p style={{marginRight: '6px'}}>about</p>
            <p style={{marginRight: '6px'}}>news</p>
            <FontAwesomeIcon icon={['fab', 'instagram']} style={{fontSize: '24px', marginTop: '11px', marginLeft: '2px'}} />
            <FontAwesomeIcon icon={['far', 'envelope']} style={{fontSize: '24px', marginTop: '11px', marginLeft: '6px'}} />
        </HeaderContainer>
    );
}

export default Header