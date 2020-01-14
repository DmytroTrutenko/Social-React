import React from 'react';
import Axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {

  componentDidMount() {
   
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 5662;
    }

    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data);
      });
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

export default connect(mapStateToProps, { setUserProfile })(withUrlDataContainerComponent); //связь Profile и Store