import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeaderContainer = styled.div `
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <p>about</p>
            <p>contact</p>
        </HeaderContainer>
    );
}

export default Header