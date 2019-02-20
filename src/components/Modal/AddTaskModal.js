import React from 'react';
import styled from 'styled-components';
import AddTaskForm from '../ModalForm/AddTaskForm';
import axios from "axios";
import moment from 'moment';

const StyledModalWrapper = styled.div `
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 100vh;
`;

const StyledModal = styled.div `
  display: flex;
  width: 500px;
  height: 300px;
  background-color:#fff;
  border-radius: .25rem;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledCloseButton = styled.button `
  height: min-content;
  cursor: pointer;
`;

const StyledForm = styled.div `
  display: flex;
  width: 100%;
  align-items: flex-start;
`;

class AddTaskModal extends React.Component {
    submit = values => {
        axios.post('/addTask', JSON.stringify(values)).then((res) => {
            // if (res.data.result) {
            //     this.props.setAuth(res.data.result)
            // };
        });
    };

    render () {
        return (
            <StyledModalWrapper>
                <StyledModal>
                    Add new task
                    <StyledCloseButton onClick={this.props.closeModal}>Close</StyledCloseButton>
                    <StyledForm>
                        <AddTaskForm onSubmit={this.submit}/>
                    </StyledForm>
                </StyledModal>
            </StyledModalWrapper>
        );
    }
}

export default AddTaskModal;