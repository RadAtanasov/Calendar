import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div `
  color: #fff;
  font-weight: bold;
  font-size: 32px;
`;

const Logo = () => {
    return <StyledLogo>Calendar</StyledLogo>
};

export default Logo;