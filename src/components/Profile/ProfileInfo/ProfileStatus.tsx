import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (newStatus: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        status: this.props.status,
        editMode: false
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") this.deactivateEditMode()
    }

    render() {
        return <>
            <div>
                {this.state.editMode ?
                    <input value={this.state.status} onKeyPress={this.onKeyPressHandler} onChange={this.onChangeHandler}
                           onBlur={this.deactivateEditMode} autoFocus/> :
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span>}
            </div>
        </>
    }
}
