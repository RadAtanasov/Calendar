import React from 'react';
import styled from 'styled-components';

const StyledTimeLine = styled.div `
  padding: 5px;
  width: min-content;
`;

const StyledHourWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;

const StyledWhole = styled.div `
  font-size: 16px;
  margin-bottom: 20px;
  color: #969696;
`;

const StyledHalf = styled.div `
  font-size: 12px;
  margin-bottom: 20px;
  color: #969696;
`;

const TimeLine = ({workingDayLength}) => {
    return (
        <StyledTimeLine>
            {
                workingDayLength.map((value, index) => {
                    return (
                        <StyledHourWrapper key={index + 'time-wrapper'}>
                            {
                                value.map((time, key) => {
                                    if (value.indexOf(time) === 0) {
                                        return (
                                            <StyledWhole key={index + time + key}>
                                                {time}
                                            </StyledWhole>
                                        )
                                    } else {
                                        return (
                                            <StyledHalf key={index + time + key}>
                                                {time}
                                            </StyledHalf>
                                        )
                                    }
                                })
                            }
                        </StyledHourWrapper>
                    )
                })
            }
        </StyledTimeLine>
    );
};

export default TimeLine;