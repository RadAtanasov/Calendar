import React from 'react';
import Task from '../Task/Task';
import styled from 'styled-components';

const StyledTaskWrapper = styled.div `
  min-width: 200px;
`;

const TaskWrapper = () => {
    return (
        <StyledTaskWrapper>
            <Task/>
        </StyledTaskWrapper>
    );
};

export default TaskWrapper;