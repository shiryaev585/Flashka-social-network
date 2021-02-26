import * as axios from "axios";
import React from "react";
import classes from "./Users.module.scss";
import userAva from "../../assets/images/user.png";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((res) => {
          props.setUsers(res.data.items);
        });
    }
  };

  return (
    <div className={classes.wrapper}>
      <button onClick={getUsers} className={classes.getUsersBtn}>
        get users
      </button>
      {props.users.map((u) => (
        <div key={u.id} className={classes.userWrapper}>
          <div>
            <div>
              <img
                src={u.photos.small != null ? u.photos.small : userAva}
                className={classes.userAva}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  className={classes.followBtn}
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={classes.followBtn}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div>
            <p>
              <span>{u.name}</span>
              <span>{u.status}</span>
            </p>
            <p>
              <span>{"u.location.country"}</span>
              <span>{"u.location.city"}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
