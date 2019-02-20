import React from 'react';
import Task from '../Task/Task';
import styled from 'styled-components';

const StyledTaskWrapper = styled.div `
  min-width: 200px;
  margin-top: 5px;
`;

const TaskWrapper = ({tasks}) => {
    return (
        <StyledTaskWrapper>
            {
                tasks
                    ? tasks.map((taskData, index) => {
                        return <Task taskData={taskData} key={index}/>
                    })
                    : ''
            }
        </StyledTaskWrapper>
    );
};

export default TaskWrapper;