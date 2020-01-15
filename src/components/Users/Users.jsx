import React from "react";
import classes from "./Users.module.css";
import userNoPhoto from "./../../assets/img/duckNoAva2.jpg";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return <div className={classes.uwrap}>
    <div className={classes.countPage}>
      {pages.map(p => {
        return <span className={props.currentPage === p ? classes.selectedPage : null}
          onClick={(e) => { props.onPageChanged(p); }}>{p}. </span>
      })}
    </div>
    {props.users.map(u => (
      <div className={classes.users} key={u.id}>
        <span>
          <div>
            <NavLink to={'/profile/' + u.id}>
              <img
                className={classes.photoImg}
                src={u.photos.small != null ? u.photos.small : userNoPhoto}
              />
            </NavLink>
          </div>
          <div>
            {!u.followed

              ? (<button disabled={props.followingInProgress.some(id=>id === u.id)}
                onClick={() => {
                  props.setIsFollowing(true, u.id);
                  usersAPI.followUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      props.follow(u.id);
                    }
                    props.setIsFollowing(false, u.id);
                  });
                  
                }}>
                follow
                    </button>)
              : (<button disabled={props.followingInProgress.some(id=>id === u.id)}
                onClick={() => {
                  props.setIsFollowing(true, u.id);
                  usersAPI.unfollowUser(u.id).then(data => {
                    if (data.resultCode === 0) {
                      props.unfollow(u.id);
                    }
                    props.setIsFollowing(false, u.id);
                  });

                }}>
                unFollow
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
      </div >
    ))}
  </div >
}


export default Users;
