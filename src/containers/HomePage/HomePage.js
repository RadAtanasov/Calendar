import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Board from '../../components/Board/Board';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import AddTaskModal from '../../components/Modal/AddTaskModal';

import {checkAuthOnServer} from "../../reducers/checkAuth";
import {getTasksFromDB} from "../../reducers/getTasks";

const StyledHomePage = styled.div `
  padding: 0;
  margin: 0;
`;

const StyledMainContent = styled.div `
  
`;

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    logoutFunction = () => {
        axios.get('/logout').then((res) => {
            if (res.data.result) {
                this.props.checkAutorisation();
            }
        });
    };

    toggleAddModal = () => {
        this.props.toggleModal(!this.props.toggleAddModalStatus);
    };

    componentDidMount() {
        this.props.checkAutorisation();
        this.props.getTasks();
    }

    render() {
        if (!this.props.checkAuth) {
            return <LoadingPage/>
        } else {
            if (!this.props.authorisation) {
                return <Redirect to={'/register'}/>
            } else {
                return (
                    <StyledHomePage>
                        <Header addTaskClick={this.toggleAddModal} handleClick={this.logoutFunction} autorisation={this.props.authorisation}/>
                        <StyledMainContent>
                            <Board
                                datesOfWeek={this.props.datesOfWeek}
                                workingDayLength={this.props.workingDayLength}
                                workingDays={this.props.workingDays}
                                tasks={this.props.tasks}
                            />
                        </StyledMainContent>
                        {this.props.toggleAddModalStatus ? <AddTaskModal closeModal={this.toggleAddModal}/> : ''}
                    </StyledHomePage>
                )
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        workingDays: state.workingDays,
        workingDayLength: state.workingDayLength,
        datesOfWeek: state.datesOfWeek,
        authorisation: state.authorisation,
        checkAuth: state.checkAuth,
        toggleAddModalStatus: state.toggleAddModal,
        tasks: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkAutorisation: () => {
            dispatch(checkAuthOnServer());
        },
        toggleModal: (toggleStatus) => {
            dispatch({
                type: 'toggleModal',
                payload: toggleStatus
            })
        },
        getTasks: () => {
            dispatch(getTasksFromDB());
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));