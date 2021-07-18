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

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input autoFocus={true} onBlur={this.deActivateEditMode} defaultValue={this.props.aboutMe}/> :
                    <p onDoubleClick={this.activateEditMode}>{this.props.aboutMe}</p>}
            </div>
        )
    }
}

export default Status;
