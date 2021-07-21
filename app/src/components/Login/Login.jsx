import styles from './Login.module.css';
import {Field, Form, Formik} from "formik";
import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.LoginForm = this.LoginForm.bind(this);
    }

    LoginForm() {
        return (
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                    isRememberMe: false,
                }}
                onSubmit={(values) => {
                    this.props.makeAuthorization(values);
                }}
            >
                <Form>
                    <p>
                        <Field autoFocus={true} id="login" name="login" type="text" placeholder="Login"/>
                    </p>
                    <p>
                        <Field id="password" name="password" type="text" placeholder="Password"/>
                    </p>
                    <p>
                        <Field id="isRememberMe" name="isRememberMe" type="checkbox"/>
                        <label htmlFor="isRememberMe">remember me</label>
                    </p>
                    <button type="submit">Submit</button>

                </Form>
            </Formik>
        )
    }

    render() {
        return (
            <section className={styles._}>
                <h1>Login</h1>
                <this.LoginForm/>
            </section>
        );
    }
}

export default Login;
