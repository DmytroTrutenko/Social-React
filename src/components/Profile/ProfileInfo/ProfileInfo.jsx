import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import userNoPhoto from './../../../assets/img/duckNoAva2.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState(false);

    if (!props.profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(()=>{
                setEditMode(false);
            }
        )
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    };

    return (
        <div className={classes.profile_info}>
            {/* top img */}
            <img className={classes.profile_info_bg}
                 src="http://habrastorage.org/files/22c/084/d30/22c084d30a884ed59db3e8385e7e9b29.png" alt={'img'}/>

            {/* Ava+name+status*/}
            <div className={classes.main_info}>
                <img src={props.profile.photos.large || userNoPhoto} alt="avatar"/>
                <ProfileStatusWithHooks status={props.status}
                                        updateUserStatus={props.updateUserStatus}/>
            </div>

            {/* button for upload photo */}
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} className={classes.input_file}/>}

            {/* ProfileData */}
            {editMode
                ? <ProfileDataReduxForm profile={props.profile} initialValues={props.profile} onSubmit={onSubmit}/>
                : <ProfileData toEditMode={() => {
                    setEditMode(true)
                }} isOwner={props.isOwner} profile={props.profile}/>}
        </div>
    )
};

const ProfileData = ({profile, isOwner, toEditMode}) => {
    return (
        <div className={classes.profile_data}>
            <div>
                <h1>{profile.fullName}</h1>
            </div>
            {/* contacts */}
            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
                })}
            </div>
            {/* contacts */}

            {/* Job */}
            <div className={classes.Job}>
                <span className={profile.lookingForAJob ? classes.job_enable : classes.job_disable}>
                     Looking for a Job
                </span>
                <span>
                    <b>My Professional skills: </b>
                    {profile.lookingForAJobDescription}
                </span>
            </div>
            {/* Job */}

            {/* About me */}
            <div className={classes.about_me}>
                <b>About me: </b>
                {profile.aboutMe}
            </div>
            {/* About me */}
            {isOwner
                ? <button onClick={toEditMode}>EditProfile</button>
                : null}
        </div>
    )
};

const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}: </b>{contactValue}</div>
};

export default ProfileInfo;
