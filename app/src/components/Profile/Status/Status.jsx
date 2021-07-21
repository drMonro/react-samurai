import React from "react";
import {Formik, Field, Form} from 'formik';

class Status extends React.Component {
    constructor(props) {
        super(props);
        this.StatusForm = this.StatusForm.bind(this);
        this.updateStatusProfile = props.updateStatusProfile;
    }

    state = {
        editMode: false,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deActivateEditMode = (e) => {
        this.setState({
            editMode: false,
        })

        this.updateStatusProfile(e.target.value);
    }

    StatusForm() {
        return (
            <Formik
                initialValues={{
                    profileStatus: this.props.profileStatus,
                }}
                onSubmit={({profileStatus}) => {
                    this.setState({
                        editMode: false,
                    })
                    this.updateStatusProfile(profileStatus);
                }}
            >
                <Form>
                    <Field autoFocus={true} onBlur={this.deActivateEditMode} id="firstName" name="profileStatus" placeholder="Ваш статус"/>
                </Form>
            </Formik>
        )
    }

    getProfileStatus = () => {
        if (this.props.isObservingProfile) {
            return <p>{this.props.profileStatus}</p>
        } else {
            return (
                <>
                    {this.state.editMode ?
                        <this.StatusForm /> :
                        <p onDoubleClick={this.activateEditMode}>{this.props.profileStatus}</p>
                    }
                </>)
        }
    }

    render() {
        return (
            <div>
                {this.getProfileStatus()}
            </div>
        )
    }
}

export default Status;
