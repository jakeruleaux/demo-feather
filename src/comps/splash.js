import React from 'react';
import styled from 'styled-components'
import Feather from './images/feather.js';

const MainHeader = styled.h1 `
    font-size: 150px;
`;
const Splash = () => {
    return (
        <div>
            <MainHeader>feather</MainHeader>
            <Feather  />
        </div>
    );
}

export default Splash;