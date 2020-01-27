import React from "react";
import classes from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
                   totalUsersCount, pageSize, currentPage, onPageChanged, users,
                   followingInProgress, follow, unfollow
               }) => {

    return <div className={classes.uwrap}>
        <Paginator
            totalItemsCount={totalUsersCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChanged={onPageChanged}
        />
        <div>
            {
                users.map(u => (
                    <User user={u} key={u.id}
                          followingInProgress={followingInProgress}
                          follow={follow}
                          unfollow={unfollow}
                    />
                ))
            }
        </div>
    </div>
};


export default Users;
