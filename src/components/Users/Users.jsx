import React from "react";
import classes from "./Users.module.scss";
import userAva from "../../assets/images/user.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

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
          <div>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userAva}
                  className={classes.userAva}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  className={classes.followBtn}
                  onClick={() => {
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "ab921276-f0bb-49d1-89b4-6feaab02e3d0"
                      }
                    })
                      .then((res) => {
                        if(res.data.resultCode == 0) {
                          props.unfollow(u.id);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={classes.followBtn}
                  onClick={() => {
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        "API-KEY": "ab921276-f0bb-49d1-89b4-6feaab02e3d0"
                      }
                    })
                      .then((res) => {
                        if(res.data.resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
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
      ))}
      <div className={classes.paginationWrapper}>
        {pages.map((p) => {
          return (
            <span
              className={props.currentPage === p && classes.selectedPage}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
