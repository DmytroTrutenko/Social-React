import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-solid-svg-icons";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../utils/validators/validators";
import {Textarea} from "../common/Forms/forms";

const maxLength30 = maxLength(30);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.msg_footer}>
            <Field
                placeholder='Enter your message'
                component={Textarea}
                name={'newMessageBody'}
                validate ={[required, maxLength30]}
            />
            <button>
                <FontAwesomeIcon
                    className={classes.icons}
                    icon={faPaperPlane}
                />
            </button>
        </form>
    )
};

const AddMessageFormRedux = reduxForm({form: 'AddMessageForm'})(AddMessageForm);

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogs.map(
        d => <DialogItem id={d.id} src={d.src} name={d.name} key={d.id}
        />);
    let messagesElements = state.messages.map(
        m => <Message message={m.message} key={m.id}
        />);

    let addNewMessage = (values) => {   ///>>handleSubmit
        props.sendMessage(values.newMessageBody);
    };

    return (<div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={classes.messages}>

                <div className={classes.msg_head}>
                    <div className={classes.img_cont}>
                        <img src='https://sun9-3.userapi.com/c857436/v857436113/83138/oy9Cp_Oeo54.jpg?ava=1' alt="ava"/>
                        <span className={classes.online_icon}></span>
                    </div>
                    <span className={classes.name}>Chat with Kessel</span>
                </div>

                <div className={classes.msg_body}>
                    {messagesElements}
                </div>

                <AddMessageFormRedux onSubmit={addNewMessage}/>

            </div>
        </div>
    );
};

export default Dialogs;