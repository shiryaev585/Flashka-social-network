import React from "react";
import styles from "./Users.module.css";

const Users = (props) => {

    if(props.users.length === 0) {
  props.setUsers([
    {
      id: 1,
      followed: false,
      avaUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRlkTCNfY65sDMC6j87tzU7eisE9izY8ZQg&usqp=CAU",
      fullName: "Alexander",
      status: "I want a job",
      location: { city: "Moscow", country: "Russia" },
    },
    {
      id: 2,
      followed: false,
      avaUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRlkTCNfY65sDMC6j87tzU7eisE9izY8ZQg&usqp=CAU",
      fullName: "Dmitry",
      status: "I am IT-Kamasutra Yo Yo Yo",
      location: { city: "Minsk", country: "Belorus" },
    },
    {
      id: 3,
      followed: true,
      avaUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaRlkTCNfY65sDMC6j87tzU7eisE9izY8ZQg&usqp=CAU",
      fullName: "Olga",
      status: "I am a boss",
      location: { city: "Pyatigorsk", country: "Russia" },
    },
  ]);
};
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.avaUrl} className={styles.userAva} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
