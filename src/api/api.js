import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "ab921276-f0bb-49d1-89b4-6feaab02e3d0",
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`, {},);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`,);
  },
};
