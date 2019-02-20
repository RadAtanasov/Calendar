import React from 'react';
import styled from 'styled-components';
import DayBoard from '../DayBoard/DayBoard'

const StyledBoard = styled.div `
   display: flex;
   width: 100%;
   min-height: 500px;
   background-color: rgba(100, 149, 237, 0.2);
   overflow-x: scroll;
`;

const Board = ({datesOfWeek, workingDays, workingDayLength, tasks}) => {
    return (
        <StyledBoard>
            {
                workingDays.map((day, index) => {
                    return <DayBoard tasks={tasks[datesOfWeek[index]]} date={datesOfWeek[index]} workingDayLength={workingDayLength} day={day} key={day + index}/>
                })
            }
        </StyledBoard>
    );
};

export default Board;