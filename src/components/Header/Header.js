import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';

const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color:#9e9e9e;
    box-sizing: border-box;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
        </StyledHeader>
    );
};

export default Header;