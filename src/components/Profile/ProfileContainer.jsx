import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    refreshProfile() {
        let profileId = this.props.match.params.userId;
        if (!profileId) {
            profileId = this.props.authorizedUserId;
            if (!profileId) {
                this.props.history.push('/login');
            }
        }
        this.props.setProfile(profileId);
        this.props.getUserStatus(profileId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
                        isOwner={!this.props.match.params.userId}
                        savePhoto ={this.props.savePhoto}
                        saveProfile ={this.props.saveProfile}
        />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
};

export default compose(
    connect(mapStateToProps, {setProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer); 