import React from 'react';
import {connect} from 'react-redux';
import {Redirect, withRouter} from 'react-router-dom';
import axios from 'axios';
import RegisterForm from '../../components/AuthorizationForm/RegisterForm';

import Header from '../../components/Header/Header';

class RegisterPage extends React.Component {
    submit = values => {
        axios.post('/register', JSON.stringify(values)).then((res) => {
            console.log(res);
        });
    };

    render () {
        console.log(this.props);
        if (this.props.authorisation) {
            return <Redirect to={'/'}/>
        } else {
            return (
                <div>
                    <Header/>
                    <RegisterForm onSubmit={this.submit}/>
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

export default withRouter(connect(mapStateToProps)(RegisterPage));