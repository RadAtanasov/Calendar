import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from "../../helpers/validate";

let RegisterForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" component="input" type="login"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <div>
                    <label htmlFor="repeat_password">Repeat password</label>
                    <Field name="repeat_password" component="input" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
};

RegisterForm = reduxForm({
    // a unique name for the form
    form: 'register'
})(RegisterForm);

export default RegisterForm;