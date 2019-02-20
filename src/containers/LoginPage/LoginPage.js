import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';
import LoginForm from '../../components/AuthorizationForm/LoginForm';

import Header from '../../components/Header/Header';

class LoginPage extends React.Component {
    submit = values => {
        axios.post('/login', JSON.stringify(values)).then((res) => {
            if (res.data.result) {
                this.props.setAuth(res.data.result)
            };
        });
    };

    render () {
        if (this.props.authorisation) {
            return <Redirect to={'/'}/>
        } else {
            return (
                <div>
                    <Header/>
                    <LoginForm onSubmit={this.submit}/>
                </div>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        authorisation: state.authorisation
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setAuth: (auth) => {
            dispatch({
                type: 'setAuth',
                payload: auth
            });
        }
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));