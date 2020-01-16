import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { setProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let profileId = this.props.match.params.userId;
    if (!profileId) {
      profileId = 5662;
    }
    this.props.setProfile(profileId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}


//как работает диспатч
// const mapDispatchToProps = (dispatch) => {
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
  connect(mapStateToProps, { setProfile }),
  withRouter,
  withAuthRedirect
)(ProfileContainer); 