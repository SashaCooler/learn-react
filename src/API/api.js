import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "8d4632a3-774d-46ff-9291-23e91a0ed472"
  }
});

export const UsersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
  },
  authUser() {
    return instance
        .get('auth/me')
        .then(response => response.data)
  },
  followUser(userId) {
    return instance
        .post(`follow/${userId}`, {})
        .then(response => response.data)
  },
  unfollowUser(userId) {
    return instance
        .delete(`follow/${userId}`)
        .then(response => response.data)
  }
};

export default UsersAPI;