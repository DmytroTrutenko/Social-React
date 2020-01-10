import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import userPhotoMan from "./../../assets/img/userMan.png";

class Users extends React.Component {

  componentDidMount() {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return <div className={classes.uwrap}>
      {this.props.users.map(u => (
        <div className={classes.users} key={u.id}>
          <span>
            <div>
              <img
                className={classes.photoImg}
                src={u.photos.small != null ? u.photos.small : userPhotoMan}
              />
            </div>
            <div>
              {u.followed
                ? (<button
                  onClick={() => { this.props.unfollow(u.id); }}>
                  Unfollow
                    </button>)
                : (<button
                  onClick={() => { this.props.follow(u.id); }}>
                  Follow
                    </button>)
              }
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  }
}

export default Users;
