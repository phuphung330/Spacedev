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
import Loading from "./components/Loading";
import { Suspense } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const element = useRoutes(routers);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timeOut);
    }, []);

    return (
        <div>
            {loading ? (
                <div className='fallback'>
                    <Loading />
                </div>
            ) : (
                <Suspense fallback={<Loading />}>{element}</Suspense>
            )}
        </div>
    );
}

export default App;
