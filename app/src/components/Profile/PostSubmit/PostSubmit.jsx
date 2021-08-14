import React from "react";
import * as Yup from 'yup';
import {Field, withFormik} from "formik";

const PostSubmit = ({submitPost}) => {
    const PostSubmitForm = ({errors, touched, handleSubmit}) => {
        console.log(errors)
        return (
            <form onSubmit={handleSubmit}>
                <Field as="textarea" name="newPostText" />
                {errors.newPostText && touched.newPostText &&<div id="feedback">{errors.newPostText}</div>}
                <button type="submit">Send</button>
            </form>
        )
    };

    const validationSchema = Yup.object().shape({
        newPostText: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
    });

    const PostSubmitFormik = withFormik({
        mapPropsToValues: () => ({ newPostText:'' }),
        handleSubmit: submitPost,
        displayName: 'PostSubmitForm',
        validationSchema
    })(PostSubmitForm);

    return (
        <PostSubmitFormik/>
    )

}

export default PostSubmit;
