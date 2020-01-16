import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { setProfile } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';


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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);  //вызываем HOC на редирект

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent); //прокидываем URL в Profile

//связь Profile и Store
export default connect(mapStateToProps, { setProfile })(withUrlDataContainerComponent); 