import React from "react";
import classes from "./Users.module.scss";
import userAva from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={classes.wrapper}>
      {props.users.map((u) => (
        <div key={u.id} className={classes.userWrapper}>
          <div className={classes.avaWrapper}>
            <div>
              <NavLink to={`/profile/${u.id}`}>
                <img
                  src={u.photos.small != null ? u.photos.small : userAva}
                  className={classes.userAva}
                  alt="user-img"
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <Button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}}
                >
                  Unfollow
                </Button>
              ) : (
                <Button
                  disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.follow(u.id)}}
                >
                  Follow
                </Button>
              )}
            </div>
          </div>
          <div>
            <p>
              <span>{u.name}</span>
              {/* <span>{u.status}</span> */}
            </p>
            <p>
              <span className={classes.userLocation}>
                {"u.location.country"}
              </span>
              <span className={classes.userLocation}>{"u.location.city"}</span>
              <span>User id: {u.id}</span>
            </p>
          </div>
        </div>
      ))}
      <div className={classes.paginationWrapper}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(page);
              }}
            >
              {page}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
