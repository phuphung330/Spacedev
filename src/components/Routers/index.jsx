import MainLayout from "../../layouts/MainLayout";
import Home from "../../pages";
import { PATH } from "../../config/path";
import CourseDetail from "../../pages/course/[slug]-id[id]";
import Register from "../../pages/register/[slug]-id[id]";
import Coin from "../../pages/coin";
import Contact from "../../pages/contact";
import Faq from "../../pages/faq";
import Course from "../../pages/course";
import Team from "../../pages/team";
import Project from "../../pages/project";
import Payment from "../../pages/payment";
import AuthRouter from "../AuthRouter";
import SignIn from "../../pages/signin";
import SignUp from "../../pages/signup";
import ResetPassword from "../../pages/reset-password";
import PrivateRouter from "../PrivateRouter";
import ProfileLayout from "../../layouts/ProfileLayout";
import Profile from "../../pages/profile";
import ProfileCourse from "../../pages/profile/course";
import ProfileProject from "../../pages/profile/project";
import ProfilePayment from "../../pages/profile/payment";
import ProfileCoin from "../../pages/profile/coin";
import ProfileCourseReview from "../../pages/profile/course-review";
import Page404 from "../../pages/404";
import Demo from "../../pages/demo";
import DemoRef from "../../pages/demo-useref";
import DemoReactjs from "@/pages/demo-reactjs";
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
