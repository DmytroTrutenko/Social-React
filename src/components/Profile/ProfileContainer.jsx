import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setProfile } from '../../redux/profile-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let profileId = this.props.match.params.userId;
    if (!profileId) {
      profileId= 5662;
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

let withUrlDataContainerComponent = withRouter(ProfileContainer); //прокидываем URL в ЗProfile

export default connect(mapStateToProps, {setProfile})(withUrlDataContainerComponent); //связь Profile и Store