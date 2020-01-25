import React from "react";
import classes from "./Users.module.css";
import userNoPhoto from "./../../assets/img/duckNoAva2.jpg";
import {NavLink} from "react-router-dom";


const User = ({user, followingInProgress, follow, unfollow}) => {
    return <div className={classes.users}>
        <span>
          <div>
            <NavLink to={'/profile/' + user.id}>
              <img
                  className={classes.photoImg}
                  src={user.photos.small != null ? user.photos.small : userNoPhoto}
              />
            </NavLink>
          </div>
          <div>
            {!user.followed
                ? (<button disabled={followingInProgress.some(id => id === user.id)}
                           onClick={() => {
                               follow(user.id)
                           }}>
                    follow
                </button>)
                : (<button disabled={followingInProgress.some(id => id === user.id)}
                           onClick={() => {
                               unfollow(user.id)
                           }}>
                    unFollow
                </button>)
            }
          </div>
        </span>
        <span>
          <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </span>
          <span>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </span>
        </span>
    </div>
};


export default User;
