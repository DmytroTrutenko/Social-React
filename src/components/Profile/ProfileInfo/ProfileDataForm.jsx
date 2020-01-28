import React from 'react';
import classes from "./ProfileInfo.module.css";
import {createField, Input, Textarea} from "../../common/Forms/forms";
import {reduxForm} from "redux-form";
import classes2 from "../../common/Forms/forms.module.css";


const ProfileDataForm = ({handleSubmit, error, profile}) => {

    return (
        <form onSubmit={handleSubmit}>
            {/*FullName*/}
            <div>
                <b>FullName: </b> {createField('Full name', 'fullName', Input, [])}
            </div>

            {/*contacts */}
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <div key={key}>
                        <b>{key}: </b> {createField(key, "contacts." + key, Input, [])}
                    </div>
                })}
            </div>

            {/* Job */}
            <div>
                <b>Looking for a Job: </b>
                {createField('', 'lookingForAJob', Input, null, {type: 'checkbox'})}
            </div>
            <div>
                <b>My Professional skills: </b>
                {createField('My Professional skills', 'lookingForAJobDescription', Textarea, [],)}
            </div>

            {/* About me */}
            <div className={classes.about_me}>
                <b>About me: </b>
                {createField('About me', 'aboutMe', Textarea, [],)}
            </div>
            {error ? <span className={classes2.formSummaryError}>{error}</span> : null}
            <button>Save Profile</button>
        </form>
    )
};
const ProfileDataReduxForm = reduxForm({form: 'edit_profile'})(ProfileDataForm);

export default ProfileDataReduxForm;