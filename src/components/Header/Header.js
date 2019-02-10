import React from 'react';
import styled from 'styled-components';
import Logo from '../Logo/Logo';
import HeaderButton from '../HeaderButton/HeaderButton';

const StyledHeader = styled.header `
    display: flex;
    align-items: center;
    padding: 10px 15px;
    background-color:#9e9e9e;
    box-sizing: border-box;
`;

const StyledButtonWrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Header = ({autorisation}) => {
    if (!autorisation) {
        return (
            <StyledHeader>
                <Logo/>
                <StyledButtonWrapper>
                    <HeaderButton route='/login' buttonText='Login'/>
                    <HeaderButton route='/register' buttonText='Register'/>
                </StyledButtonWrapper>
            </StyledHeader>
        );
    } else {
        return (
            <StyledHeader>
                <Logo/>
                <StyledButtonWrapper>
                    <HeaderButton route='/logout' buttonText='Logout'/>
                </StyledButtonWrapper>
            </StyledHeader>
        );
    }

};

export default Header;