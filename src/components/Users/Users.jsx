import React from 'react';
import classes from './Users.module.css';
import * as Axios from 'axios';
import userPhotoMan from './../../assets/img/userMan.png';

let Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            Axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }




    return (
        <div className={classes.uwrap}>
            <button onClick={getUsers}>Get Users</button>
            {
                props.users.map(u => <div class={classes.users} key={u.id}>
                    <span>
                        <div>
                            <img
                                class={classes.photoImg}
                                src={u.photos.small != null
                                    ? u.photos.small
                                    : userPhotoMan} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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
                </div>)
            }
        </div>
    );
}


export default Users;