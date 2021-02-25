import React from "react";
import * as axios from "axios";
import classes from "./Users.module.css";
import userAva from "../../assets/images/user.png";

class UsersClass extends React.Component {
  constructor(props) {
    super(props);
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  }

  render() {
    return (
      <div className={classes.wrapper}>
        {this.props.users.map((u) => (
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
                      this.props.unfollow(u.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    className={classes.followBtn}
                    onClick={() => {
                      this.props.follow(u.id);
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
  }
}

export default UsersClass;
