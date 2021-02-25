import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from '../../redux/usersReducer';
// import Users from './Users';
import UsersClass from './UsersClass'



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (UsersClass);