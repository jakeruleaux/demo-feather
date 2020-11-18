import React from 'react';
import styled, { keyframes } from 'styled-components';
import Tree from '../products/tree.jpg';
import Mobile from '../products/mobile.jpg';
import Tiles from '../products/tiles.jpg';
import Wallhanging from '../products/wallhanging.jpg';
import Wreath from '../products/wreath.jpg';

const ProductListContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;



const ProductList = () => {
    return (
        <ProductListContainer>
            P-list
            <img src={Tree} alt='tree' style={{width: '200px', marginBottom: '40px', maxHeight: '200px'}} />
            <img src={Tiles} alt='tiles' style={{width: '200px', marginBottom: '40px', maxHeight: '200px'}} />
            <img src={Wallhanging} alt='wallhanging' style={{width: '200px', marginBottom: '40px', maxHeight: '200px'}} />
            <img src={Mobile} alt='mobile' style={{width: '200px', marginBottom: '40px', maxHeight: '200px'}} />
            <img src={Wreath} alt='wreath' style={{width: '200px', marginBottom: '40px', maxHeight: '200px'}} />
        </ProductListContainer>
    );
}

export default ProductList;