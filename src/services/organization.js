import axios from "axios";
import { COURSE_ORGANIZATION } from "../config/api";

export const organizationServices = {
    contact(data) {
        return axios.post(`${COURSE_ORGANIZATION}/contact`, data);
    },
};
