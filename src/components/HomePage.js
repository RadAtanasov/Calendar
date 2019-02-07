import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header/Header';
import Board from './Board/Board';

const StyledHomePage = styled.div `
  padding: 0;
  margin: 0;
`;

const StyledMainContent = styled.div `
  
`;

class HomePage extends React.Component {
    render() {
        console.log(this.props);
        if (!this.props.authorisation) {
            return <Redirect to={'/auth'}/>
        } else {
            return (
                <StyledHomePage>
                    <Header/>
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

const mapStateToProps = state => {
    console.log(state);
    return {
        workingDays: state.workingDays,
        workingDayLength: state.workingDayLength,
        datesOfWeek: state.datesOfWeek,
        authorisation: state.authorisation
    };
};

export default withRouter(connect(mapStateToProps)(HomePage));