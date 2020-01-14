import React from "react";
import classes from "./Users.module.css";
import userNoPhoto from "./../../assets/img/duckNoAva2.jpg";
import { NavLink } from "react-router-dom";

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
            <NavLink to= {'/profile/'+ u.id}>
              <img
                className={classes.photoImg}
                src={u.photos.small != null ? u.photos.small : userNoPhoto}
              />
            </NavLink>
          </div>
          <div>
            {u.followed
              ? (<button
                onClick={() => { props.unfollow(u.id); }}>
                Unfollow
                    </button>)
              : (<button
                onClick={() => { props.follow(u.id); }}>
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


export default Users;
