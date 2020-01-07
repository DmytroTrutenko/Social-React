import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {

if (props.users.length === 0){
    props.setUsers([{
        id: 1,
        photoURL: 'https://sun9-1.userapi.com/c636125/v636125322/13643/KkBYQow4QQI.jpg?ava=1',
        followed: false,
        fullname: 'Dmitry',
        status: 'i am a boss',
        location: {
            city: 'Tallinn',
            country: 'Estonia'
        }
    },
    {
        id: 2,
        photoURL: 'https://sun9-71.userapi.com/c857224/v857224611/9c85/p8ULu-oNnXo.jpg?ava=1',
        followed: true,
        fullname: 'Vasia',
        status: 'gg wp',
        location: {
            city: 'Kiev',
            country: 'Ukraine'
        }
    },
    {
        id: 3,
        photoURL: 'https://sun9-59.userapi.com/c851432/v851432612/151ff4/8KC8TLW1DhE.jpg?ava=1',
        followed: true,
        fullname: 'Vika',
        status: 'i am a beautiful',
        location: {
            city: 'Madrid',
            country: 'Spain'
        }
    },
    {
        id: 4,
        photoURL: 'https://sun9-69.userapi.com/c845417/v845417469/d5a6f/7dXKtY3QyXY.jpg?ava=1',
        followed: true,
        fullname: 'Conor',
        status: 'King UFC',
        location: {
            city: 'New York',
            country: 'USA'
        }
    }]);
}
       
    


    return (
        <div>
            {
                props.users.map(u => <div class={classes.users} key={u.id}>
                    <span>
                        <div>
                            <img class={classes.photoImg} src={u.photoURL} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
}


export default Users;