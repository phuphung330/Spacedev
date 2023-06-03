import { authService } from "@/services/auth";
import axios from "axios";
import { getToken, setToken } from "../utils/token";

export const COURSE_API = import.meta.env.VITE_COURSE_API;
export const COURSE_ORGANIZATION = import.meta.env.VITE_ORGANIZATION_API;
export const COURSE_USER = import.meta.env.VITE_USER_API;
export const COURSE_AUTH = import.meta.env.VITE_AUTH_API;

export const api = axios.create();
api.interceptors.response.use(
    (res) => {
        return res.data;
    },
    async (error) => {
        try {
            if (
                error.response.status === 403 &&
                error.response.data.error_code === "TOKEN_EXPIRED"
            ) {
                const token = getToken();
                //refresh token
                const res = await authService.refreshToken({
                    refreshToken: token.refreshToken,
                });
                setToken(res.data);
                //thuc thi lai api bi loi
                return api(error.config);
            }
        } catch (error) {}
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
