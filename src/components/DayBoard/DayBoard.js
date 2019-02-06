import React from 'react';
import styled from 'styled-components';
import TimeLine from '../TimeLine/TimeLine';
import TaskWrapper from '../TaskWrapper/TaskWrapper';

const StyledDayBoard = styled.div `
  width: 200px;
  min-height: 500px;
  margin-top: 10px;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  .day_name {
    border: 2px solid #ccc;
    height: max-content;
    text-align: center;
    font-weight: 600;
    background-color:#fff;
    padding: 3px;
    display: flex;
    flex-wrap: wrap;
    span {
      width: 100%;
      &:first-child {
        margin-bottom: 3px;
      }
    }
  }
  .deals {
    display: flex;
    width: 40px;
    margin-top: 10px;
    background-color: #fff;
    width: 100%;
  }
`;

const DayBoard = ({day, date, workingDayLength}) => {
    return (
        <StyledDayBoard>
            <div className="day_name">
                <span>{day}</span>
                <span>{date}</span>
            </div>
            <div className="deals">
                <TimeLine workingDayLength={workingDayLength}/>
                <TaskWrapper/>
            </div>
        </StyledDayBoard>
    );
};

export default DayBoard;