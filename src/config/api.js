import axios from "axios";
import { getToken } from "../utils/token";

export const COURSE_API = import.meta.env.VITE_COURSE_API;
export const COURSE_ORGANIZATION = import.meta.env.VITE_ORGANIZATION_API;
export const COURSE_USER = import.meta.env.VITE_USER_API;
export const COURSE_AUTH = import.meta.env.VITE_AUTH_API;

export const api = axios.create();
api.interceptors.response.use(
    (res) => {
        return res.data;
    },
    (error) => {
        throw error;
    }
);

api.interceptors.request.use((config) => {
    const token = getToken();

    if (token) {
        config.headers["Authorization"] = ` Bearer ${token.accessToken}`;
    }
    return config;
});
