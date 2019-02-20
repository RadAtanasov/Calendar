import React from 'react';
import styled from 'styled-components';

const StyledTask = styled.div `
  width: 100%;
  background-color:#9aa5ff;
`;

const Task = ({taskData}) => {
    let styled = {
        height: (taskData.duration * 1.27) + 'px'
    };

    return (
        <StyledTask style={styled}>
            {taskData.task_name}
        </StyledTask>
    );
};

export default Task;