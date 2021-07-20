import React from "react";

class Status extends React.Component {
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
        this.props.updateStatusProfile(e.target.value);

    }

    getProfileStatus = () => {
        if (this.props.isObservingProfile) {
            return <p>{this.props.profileStatus}</p>
        } else {
            return (
                <>
                    {this.state.editMode ?
                        <input autoFocus={true} onBlur={this.deActivateEditMode} defaultValue={this.props.profileStatus}/> :
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
