import React from 'react';
import styled, { keyframes } from 'styled-components';
import Feather from '../images/feather.js';
import Header from './Header';

const fadeIn = keyframes `
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
`;

const MainHeader = styled.h1 `
    font-size: 150px;
    margin-top: 50px;
    margin-bottom: -150px;
    animation-name: ${fadeIn};
            animation-duration: 10s;
            transition-timing-function: ease-out;
`;
const Splash = () => {
    return (
        <div>
            <Header />
            <MainHeader>feather</MainHeader>
            <Feather  />
        </div>
    );
}

export default Splash;