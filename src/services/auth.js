import { api } from "../config/api";
import { COURSE_AUTH } from "../config/api";
export const authService = {
    login(data) {
        return api.post(`${COURSE_AUTH}/login`, data);
    },
    refreshToken(data) {
        return api.post(`${COURSE_AUTH}/refresh-token`, data);
    },
};
