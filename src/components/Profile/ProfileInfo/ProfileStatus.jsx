import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({editMode: true});
    }
    deactivateEditMode = () => {
        this.setState({editMode: false});
        this.props.updateUserStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        //если предыдущий статус не такой как текущий статус что пришел при обновлении, то меняем
        if (prevProps.status !== this.props.status) {
            this.setState({status: this.props.status})
        }
    }

    render() {
        return (
            <div style={{paddingTop: 20 + 'px'}}>
                {!this.state.editMode &&
                <div>
                        <span
                            onDoubleClick={this.activateEditMode}>
                            {this.props.status || '-----'}
                        </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                           autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>}
            </div>
        )
    }
}

export default ProfileStatus;