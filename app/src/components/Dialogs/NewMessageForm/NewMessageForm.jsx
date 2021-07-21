import styles from './NewMessageForm.module.css';
import {Field, withFormik} from "formik";
import React from "react";

const NewMessageForm = ({submitNewMessage}) => {

    const MessageSubmitForm = ({handleSubmit}) => {
        return (
            <form className={styles._} onSubmit={handleSubmit}>
                <Field as="textarea" name="newMessageText" />
                <button type="submit">Send message</button>
            </form>
        )
    };

    const NewMessageFormik = withFormik({

        mapPropsToValues: () => ({ newMessageText:'' }),
        handleSubmit: submitNewMessage,
        displayName: 'PostSubmitForm',
    })(MessageSubmitForm);

    return (
        <NewMessageFormik/>
    )

}

export default NewMessageForm;
