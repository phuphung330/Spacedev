import { COURSE_USER, api } from "../config/api";
export const userService = {
    register(data) {
        return api.post(`${COURSE_USER}/register`, data);
    },
    getInfo() {
        return api.get(`${COURSE_USER}`);
    },
    resendRegister(data) {
        return api.post(`${COURSE_USER}/resend-email`, data);
    },
};
