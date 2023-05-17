const PROFILE_PATH = "/profile";

const COURSE_PATH = "/course";

export const PATH = {
    home: "/",
    team: "/team",
    project: "/project",
    course: COURSE_PATH,
    payment: "/payment",

    courseDetail: COURSE_PATH + "/:slug-id:id",
    courseRegister: "/register/:slug-id:id",
    contact: "/contact",
    coin: "/coin",
    signin: "/signin",
    signup: "/signup",
    resetPassword: "/reset-password",
    faq: "/faq",
    profile: {
        index: PROFILE_PATH,
        course: PROFILE_PATH + "/course",
        payment: PROFILE_PATH + "/payment",
        project: PROFILE_PATH + "/project",
        coin: PROFILE_PATH + "/coin",
        courseReview: PROFILE_PATH + "/course-review",
    },
};
