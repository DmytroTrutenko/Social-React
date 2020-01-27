import React from 'react';
import {connect} from 'react-redux';
import {follow, unfollow, setCurrentPage, setIsFollowing, requestUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {compose} from 'redux';
import {getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selector";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize, requestUsers} = this.props;
        requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {setCurrentPage, pageSize, requestUsers} = this.props;
        setCurrentPage(pageNumber);
        requestUsers(pageNumber, pageSize);
    };

    render() {
        const {
            isFetching, totalUsersCount,
            pageSize, users,
            unfollow, follow,
            currentPage, followingInProgress
        } = this.props;

        return <>
            {isFetching ? <Preloader/> : null}
            <Users totalUsersCount={totalUsersCount}
                   pageSize={pageSize}
                   onPageChanged={this.onPageChanged}
                   users={users}
                   unfollow={unfollow}
                   follow={follow}
                   currentPage={currentPage}
                   followingInProgress={followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        followingInProgress: getFollowingInProgress(state),
    }
};

export default compose(
    connect(mapStateToProps,
        {follow, unfollow, setCurrentPage, setIsFollowing, requestUsers})
)(UsersContainer)