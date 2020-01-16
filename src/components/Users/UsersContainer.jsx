import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, setIsFollowing, getUsersAC } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersAC(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersAC(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                currentPage={this.props.currentPage}
                followingInProgress={this.props.followingInProgress}
                setIsFollowing ={this.props.setIsFollowing}/>
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress : state.usersPage.followingInProgress,
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (countNumber) => {
//             dispatch(setTotalUsersCountAC(countNumber));
//         },
//         toggleIsFetching: (isFetching) =>{
//             dispatch(setIsFetchingAC(isFetching));
//         }
//     }
// }

export default connect(mapStateToProps,
    {
        follow, unfollow,
        setCurrentPage, setIsFollowing,
        getUsersAC

    })(UsersContainer);