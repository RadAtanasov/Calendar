import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledButton = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3px;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0);
  box-sizing: border-box;
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
  }
  &:hover, &:focus, &:active {
    cursor: pointer;
    background-color: #fff;
    outline: none;
      a {
        color: #9D9D9D;
      }
  }
`;

const HeaderButton = ({buttonText, route}) => {
    return (
        <StyledButton>
            <Link to={route}>
                {buttonText}
            </Link>
        </StyledButton>
    );
};

export default HeaderButton;