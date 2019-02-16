import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import Header from './Header/Header';
import Board from './Board/Board';
import LoadingPage from './LoadingPage/LoadingPage';

import {checkAuthOnServer} from "../reducers/checkAuth";

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
    }

    componentDidMount() {
        this.props.checkAutorisation();
    }

    render() {
        console.log(this.props);
        if (!this.props.checkAuth) {
            return <LoadingPage/>
        } else {
            if (!this.props.authorisation) {
                return <Redirect to={'/register'}/>
            } else {
                return (
                    <StyledHomePage>
                        <Header handleClick={this.logoutFunction} autorisation={this.props.authorisation}/>
                        <StyledMainContent>
                            <Board
                                datesOfWeek={this.props.datesOfWeek}
                                workingDayLength={this.props.workingDayLength}
                                workingDays={this.props.workingDays}
                            />
                        </StyledMainContent>
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
        checkAuth: state.checkAuth
    };
};

const mapDispatchToProps = dispatch => {
    return {
        checkAutorisation: () => {
            dispatch(checkAuthOnServer());
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomePage));