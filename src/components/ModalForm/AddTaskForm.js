import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {required} from "../../helpers/validate";

let AddTaskForm = props => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="taskname">Task name</label>
                    <Field name="taskname" component="input" type="text"/>
                </div>
                <div>
                    <label htmlFor="start">Start date</label>
                    <Field name="start" component="input" type="datetime-local"/>
                </div>
                <div>
                    <label htmlFor="end">End date</label>
                    <Field name="end" component="input" type="datetime-local"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <Field name="description" component="input" type="text" />
                </div>
                <button type="submit">Submit</button>
            </form>
};

AddTaskForm = reduxForm({
    // a unique name for the form
    form: 'addTask'
})(AddTaskForm);

export default AddTaskForm;