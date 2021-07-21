import React from "react";
import {Field, withFormik} from "formik";

const PostSubmit = ({submitPost}) => {
    const PostSubmitForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                <Field as="textarea" name="newPostText" />
                <button type="submit">Send</button>
            </form>
        )
    };

    const PostSubmitFormik = withFormik({
        mapPropsToValues: () => ({ newPostText:'' }),
        handleSubmit: submitPost,
        displayName: 'PostSubmitForm',
    })(PostSubmitForm);

    return (
        <PostSubmitFormik/>
    )

}

export default PostSubmit;
