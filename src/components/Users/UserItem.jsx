import React from "react";
import classes from "./Users.module.scss";
import userAva from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import Button from "../common/Button/Button";

const UserItem = ({user, followingInProgress, follow, unfollow}) => {
  
  return (
    <div className={classes.userWrapper}>
      <div className={classes.avaWrapper}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small != null ? user.photos.small : userAva}
              className={classes.userAva}
              alt="user-img"
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </Button>
          ) : (
            <Button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </Button>
          )}
        </div>
      </div>
      <div>
        <p>
          <span>{user.name}</span>
        </p>
        <p>
          <span className={classes.userLocation}>{"u.location.country"}</span>
          <span className={classes.userLocation}>{"u.location.city"}</span>
          <span>User id: {user.id}</span>
        </p>
      </div>
    </div>
  );
};

export default UserItem;
