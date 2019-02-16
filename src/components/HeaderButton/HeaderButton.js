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
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  line-height: 1;
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
    color: #9D9D9D;
      a {
        color: #9D9D9D;
      }
  }
`;

const HeaderButton = ({buttonText, route, handleClick}) => {
    return (
        <StyledButton onClick={handleClick}>
            {
                route
                ? <Link to={route}>
                      {buttonText}
                  </Link>
                : buttonText
            }
        </StyledButton>
    );
};

export default HeaderButton;