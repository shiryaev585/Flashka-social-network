import React from "react";
import classes from "./Users.module.scss";
import userAva from "../../assets/images/user.png";

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };

  return (
    <div className={classes.wrapper}>
      {
        props.users.map(u => <div key={u.id} className={classes.userWrapper}>
          <div>
            <div>
              <img src={u.photos.small != null ? u.photos.small : userAva}
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
              <span className={classes.userLocation}>
                {"u.location.country"}
              </span>
              <span className={classes.userLocation}>{"u.location.city"}</span>
              <span>User id: {u.id}</span>
            </p>
          </div>
        </div>
      )}
      {pages.map((p) => {
        return (
          <span
            className={props.currentPage === p && classes.selectedPage}
            onClick={(e) => {
              props.onPageChanged(p)
            }}
          >
            {p}{" "}
          </span>
        );
      })}
    </div>
  );
};

export default Users;
