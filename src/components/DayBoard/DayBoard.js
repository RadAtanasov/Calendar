import React from 'react';
import styled from 'styled-components';

const StyledDayBoard = styled.div `
  width: 200px;
  min-height: 500px;
  background-color: rgba(2, 222, 185, 0.2);
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  .day_name {
    border: 2px solid #ccc;
    width: 100%;
    height: max-content;
    text-align: center;
    font-weight: 600;
    background-color:#fff;
    padding: 3px;
  }
`;

const DayBoard = ({day}) => {
    return (
        <StyledDayBoard>
            <div className="day_name">{day}</div>
        </StyledDayBoard>
    );
};

export default DayBoard;