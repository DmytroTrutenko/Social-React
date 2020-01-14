import React from "react";
import classes from "./Users.module.css";
import userNoPhoto from "./../../assets/img/duckNoAva2.jpg";
import { NavLink } from "react-router-dom";
import Axios from "axios";

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

              ? (<button
                onClick={() => {
                  Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                    {
                      withCredentials: true,
                      headers: { 'API-KEY': '5ad24d5a-e428-47a7-b1ff-f9ab7c19bde8' }
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id);
                      }
                    });
                }}>
                follow
                    </button>)
              : (<button
                onClick={() => {
                  Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                    {
                      withCredentials: true,
                      headers: { 'API-KEY': '5ad24d5a-e428-47a7-b1ff-f9ab7c19bde8' }
                    })
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id);
                      }
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
