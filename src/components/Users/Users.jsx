import React from "react";
import classes from "./Users.module.scss";
import Pagination from "../common/Pagination/Pagination";
import UserItem from "./UserItem";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  users,
  ...props
}) => {
  return (
    <div className={classes.wrapper}>
      {users.map((u) => (
        <UserItem
          key={u.id}
          user={u}
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
      />
    </div>
  );
};

export default Users;
