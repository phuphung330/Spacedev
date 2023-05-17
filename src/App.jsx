import { useState, useEffect } from "react";
import Contact from "./pages/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from "./pages/register/[slug]-id[id]";
// import "./assets/css/tailwind.css";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/index";
import Payment from "./pages/payment";
import Project from "./pages/project";
import Faq from "./pages/faq";
import Team from "./pages/team";
import Course from "./pages/course";
import Page404 from "./pages/404";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import ResetPassword from "./pages/reset-password";
import Coin from "./pages/coin";
import Profile from "./pages/profile/index";
import ProfileCourse from "./pages/profile/course";
import ProfileProject from "./pages/profile/project";
import ProfilePayment from "./pages/profile/payment";
import ProfileCoin from "./pages/profile/coin";
import ProfileCourseReview from "./pages/profile/course-review";
import ProfileLayout from "./layouts/ProfileLayout";
import MainLayout from "./layouts/MainLayout";
import { PATH } from "./config/path";
import CourseDetail from "./pages/course/[slug]-id[id]";
import PrivateRouter from "./components/PrivateRouter";
import AuthRouter from "./components/AuthRouter";
import { routers } from "./components/Routers";
import "../public/dest/custom.css";

function App() {
    // const [user, setUser] = useState(() => {
    //     try {
    //         return JSON.parse(localStorage.getItem("user"));
    //     } catch (error) {
    //         return null;
    //     }
    // const [user, setUser] = useState({});
    // });
    // const login = () => {
    //     setUser({
    //         name: "Phung Le Phu",
    //         avatar: "/img/avt.png",
    //     });
    // };

    // const logout = () => {
    //     setUser();
    // };

    // useEffect(() => {
    //     localStorage.setItem("user", JSON.stringify(user));
    // }, [user]);

    const element = useRoutes(routers);

    return (
        <>
            {element}
            {/* <Routes>
                <Route element={<MainLayout user={user} logout={logout} />}>
                    <Route index element={<Home />} />
                    <Route path={PATH.course}>
                        <Route index element={<Course />} />
                        <Route
                            path={PATH.courseDetail}
                            element={<CourseDetail />}
                        />
                    </Route>

                    <Route path={PATH.courseRegister} element={<Register />} />

                    <Route path={PATH.contact} element={<Contact />} />
                    <Route path={PATH.payment} element={<Payment />} />
                    <Route path={PATH.project} element={<Project />} />
                    <Route path={PATH.faq} element={<Faq />} />
                    <Route path={PATH.coin} element={<Coin />} />
                    <Route path={PATH.team} element={<Team />} />

                    <Route
                        element={
                            <AuthRouter
                                user={user}
                                redirect={PATH.profile.index}
                            />
                        }
                    >
                        <Route
                            path={PATH.signin}
                            element={<SignIn login={login} />}
                        />
                        <Route path={PATH.signup} element={<SignUp />} />
                        <Route
                            path={PATH.resetPassword}
                            element={<ResetPassword />}
                        />
                    </Route>

                    <Route
                        element={
                            <PrivateRouter user={user} redirect={PATH.signin} />
                        }
                    >
                        <Route
                            path={PATH.profile.index}
                            element={<ProfileLayout user={user} />}
                        >
                            <Route index element={<Profile />} />
                            <Route
                                path={PATH.profile.course}
                                element={<ProfileCourse />}
                            />
                            <Route
                                path={PATH.profile.project}
                                element={<ProfileProject />}
                            />
                            <Route
                                path={PATH.profile.payment}
                                element={<ProfilePayment />}
                            />
                            <Route
                                path={PATH.profile.coin}
                                element={<ProfileCoin />}
                            />
                            <Route
                                path={PATH.profile.courseReview}
                                element={<ProfileCourseReview />}
                            />
                        </Route>
                    </Route>

                    <Route path='*' element={<Page404 />} />
                </Route>
            </Routes> */}

            {/* <Register /> */}
        </>
    );
}

export default App;
