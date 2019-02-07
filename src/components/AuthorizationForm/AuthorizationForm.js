import React from 'react';
import { Field, reduxForm } from 'redux-form'

let AuthorizationForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="login">Login</label>
                    <Field name="login" component="input" type="login" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field name="password" component="input" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
};

AuthorizationForm = reduxForm({
    // a unique name for the form
    form: 'contact'
})(AuthorizationForm);

export default AuthorizationForm;