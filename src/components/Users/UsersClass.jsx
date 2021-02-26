import React from "react";
import * as axios from "axios";
import classes from "./Users.module.scss";
import userAva from "../../assets/images/user.png";

class UsersClass extends React.Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
        this.props.setTotalUsersCount(res.data.totalCount);
      });
  };

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((res) => {
        this.props.setUsers(res.data.items);
      });
  };

  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize); 

    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

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
                <span className={classes.userLocation}>{"u.location.country"}</span>
                <span className={classes.userLocation}>{"u.location.city"}</span>
                <span>User id: {u.id}</span>
              </p>
            </div>
          </div>
        ))}
        {pages.map(p => {
          return <span className={this.props.currentPage === p && classes.selectedPage} onClick={(e) => {this.onPageChanged(p)}}>{p} </span>
        })}
      </div>
    );
  }
}

export default UsersClass;
