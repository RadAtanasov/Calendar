import React from 'react';
import {connect} from 'react-redux';
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

const mapStateToProps = state => {
    return {
        workingDays: state.workingDays,
        workingDayLength: state.workingDayLength,
        datesOfWeek: state.DatesOfWeek
    };
};

export default connect(mapStateToProps)(HomePage);