import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "a50253f5-893a-40d8-8d68-f0f185ded4d4"
    }
});

export const authAPI = {
    getAuth() {
        return axiosInstance.get(`auth/me`)
            .then(({data}) => {
                return data;
            });
    },
}

export const usersAPI = {
    followUser(id) {
        return axiosInstance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    unFollowUser(id) {
        return axiosInstance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    getUsers(currentPage, pageSize) {
        return axiosInstance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    getProfileData(userId) {
        return axiosInstance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}
