import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    //когда произойдет отрисовка , потом выполняется useEffect!
    //компонента возвращает разметку JSX и вторым параметром хук useEffect
    //[props.status] - зависимость! если props.status прийдет на такой как раньше то запусти useEffect
    //синхронизируем статус в пропсах со статусом в state.
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status)
    };

    // componentDidUpdate(prevProps, prevState) {
    //   if (prevProps.profileStatus !== this.props.profileStatus) {
    //     this.setState({
    //       status: this.props.profileStatus
    //     })
    //   }
    // }
    return (
        <div style={{paddingTop: 20 + 'px'}}>
            {!editMode &&
            <span onDoubleClick={activateEditMode}>
                {props.status ? props.status : 'Change status'}
            </span>
            }
            {editMode &&
            <input autoFocus={true}
                   onBlur={deactivateEditMode}
                   type="text"
                   value={status}
                   onChange={onStatusChange} />
            }
        </div>
    );
};

export default ProfileStatusWithHooks;