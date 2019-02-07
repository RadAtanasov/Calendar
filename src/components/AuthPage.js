import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';
import AuthorizationForm from './AuthorizationForm/AuthorizationForm';

class AuthPage extends React.Component {
    submit = values => {
        axios.post('/', JSON.stringify(values)).then((res) => {
            console.log(res);
        });
    };

    render () {
        console.log(this.props);
        if (this.props.authorisation) {
            return <Redirect to={'/'}/>
        } else {
            return (
                <AuthorizationForm onSubmit={this.submit}/>
            )
        }

    }
}

const mapStateToProps = state => {
    return {
        authorisation: state.authorisation
    }
};

export default withRouter(connect(mapStateToProps)(AuthPage));