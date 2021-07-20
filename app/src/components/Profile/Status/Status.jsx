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

    deActivateEditMode = () => {
        this.setState({
            editMode: false,
        })
    }

    getProfileStatus = () => {
        console.log(this.props)
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
