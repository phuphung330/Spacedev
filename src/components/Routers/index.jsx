import { PATH } from "@/config/path";

import Demo from "@/pages/demo";
import DemoRef from "@/pages/demo-useref";
import DemoReactjs from "@/pages/demo-reactjs";
import { lazy } from "react";

const loadComponent = (path, interval = 250) => {
    return new Promise((resolve) => setTimeout(() => resolve(path), interval));
};

const SignIn = lazy(() => loadComponent(import("@/pages/signin")));
// const SignIn = lazy(() => {
//     setTimeout(import("@/pages/signin")), 1000;
// });
const CourseDetail = lazy(() =>
    loadComponent(import("@/pages/course/[slug]-id[id]"))
);
const Register = lazy(() =>
    loadComponent(import("@/pages/register/[slug]-id[id]"))
);
const Coin = lazy(() => loadComponent(import("@/pages/coin")));
const Contact = lazy(() => loadComponent(import("@/pages/contact")));
const Faq = lazy(() => loadComponent(import("@/pages/faq")));
const Course = lazy(() => loadComponent(import("@/pages/course")));
const Team = lazy(() => loadComponent(import("@/pages/team")));
const Project = lazy(() => loadComponent(import("@/pages/project")));
const Payment = lazy(() => loadComponent(import("@/pages/payment")));
const AuthRouter = lazy(() => loadComponent(import("@/components/AuthRouter")));
const SignUp = lazy(() => loadComponent(import("@/pages/signup")));
const ResetPassword = lazy(() =>
    loadComponent(import("@/pages/reset-password"))
);
const PrivateRouter = lazy(() =>
    loadComponent(import("@/components/PrivateRouter"))
);
const ProfileLayout = lazy(() =>
    loadComponent(import("@/layouts/ProfileLayout"))
);
const Profile = lazy(() => loadComponent(import("@/pages/profile")));
const ProfileCourse = lazy(() =>
    loadComponent(import("@/pages/profile/course"))
);
const ProfileProject = lazy(() =>
    loadComponent(import("@/pages/profile/project"))
);
const ProfilePayment = lazy(() =>
    loadComponent(import("@/pages/profile/payment"))
);
const ProfileCoin = lazy(() => loadComponent(import("@/pages/profile/coin")));
const ProfileCourseReview = lazy(() =>
    loadComponent(import("@/pages/profile/course-review"))
);
const Page404 = lazy(() => loadComponent(import("@/pages/404")));
const MainLayout = lazy(() => loadComponent(import("@/layouts/MainLayout")));
const Home = lazy(() => loadComponent(import("@/pages")));

export const routers = [
    {
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "/demo", element: <Demo /> },
            { path: "/demo-ref", element: <DemoRef /> },
            { path: "/demo-reactjs", element: <DemoReactjs /> },
            {
                path: PATH.course,
                children: [
                    { element: <Course />, index: true },
                    {
                        path: PATH.courseDetail,
                        element: <CourseDetail />,
                    },
                ],
            },
            { path: PATH.courseRegister, element: <Register /> },
            { path: PATH.coin, element: <Coin /> },
            { path: PATH.contact, element: <Contact /> },
            { path: PATH.faq, element: <Faq /> },
            { path: PATH.team, element: <Team /> },
            { path: PATH.project, element: <Project /> },
            { path: PATH.payment, element: <Payment /> },
            {
                element: <AuthRouter redirect={PATH.profile.index} />,
                children: [
                    {
                        path: PATH.signin,
                        element: <SignIn />,
                    },
                    { path: PATH.signup, element: <SignUp /> },
                    {
                        path: PATH.resetPassword,
                        element: <ResetPassword />,
                    },
                ],
            },
            {
                element: <PrivateRouter redirect={PATH.signin} />,
                children: [
                    {
                        path: PATH.profile.index,
                        element: <ProfileLayout />,
                        children: [
                            {
                                element: <Profile />,
                                index: true,
                            },
                            {
                                path: PATH.profile.course,
                                element: <ProfileCourse />,
                            },
                            {
                                path: PATH.profile.project,
                                element: <ProfileProject />,
                            },
                            {
                                path: PATH.profile.payment,
                                element: <ProfilePayment />,
                            },
                            {
                                path: PATH.profile.coin,
                                element: <ProfileCoin />,
                            },
                            {
                                path: PATH.profile.courseReview,
                                element: <ProfileCourseReview />,
                            },
                        ],
                    },
                ],
            },
            { path: "*", element: <Page404 /> },
        ],
    },
];
