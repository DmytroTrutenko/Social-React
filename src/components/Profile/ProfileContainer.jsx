import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {setProfile, getUserStatus, updateUserStatus} from '../../redux/profile-reducer';
import {compose} from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let profileId = this.props.match.params.userId;
        if (!profileId) {
            profileId = this.props.authorizedUserId;
            if(!profileId){
                this.props.history.push('/login');
            }
        }
        this.props.setProfile(profileId);
        this.props.getUserStatus(profileId);
    }

    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
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


//как работает диспатч
// const mapDispatchToProps = (dispatch) => {ы
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         }
//     }
// }

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);  
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent); //прокидываем URL в Profile
// //связь Profile и Store
// export default connect(mapStateToProps, { setProfile })(withUrlDataContainerComponent); 


//функция compose вызывает конвеер функций для начальной какой-то компоненты.
//вызываются функции снизу вверх
export default compose(
    connect(mapStateToProps, {setProfile, getUserStatus, updateUserStatus}),
    withRouter
)(ProfileContainer); 