import Skeleton from "@/components/Skeleton";
import { PATH } from "@/config/path";
import { useFetch } from "@/hooks/useFetch";
import { courseService } from "@/services/course";
import { userService } from "@/services/user";
import moment from "moment";
import React from "react";
import { generatePath, Link } from "react-router-dom";

function ProfileCourse() {
    const { loading, data: courses } = useFetch(courseService.getMyCourse);

    if (loading)
        return Array.from(Array(5)).map((_, i) => (
            <div key={i} className='mb-5'>
                <Skeleton height={250} />
            </div>
        ));

    // const path = generatePath(PATH.courseDetail, {
    //     slug: courses.data[index].course.slug,
    //     id: courses.data[index].course.id,
    // });
    return (
        <div className='tab2'>
            {courses.data.length === 0 ? (
                <div
                    className='text-center'
                    style={{
                        color: "#65676B",
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                >
                    Bạn chưa đăng ký khoá học nào{" "}
                </div>
            ) : (
                courses?.data?.map((e) => {
                    const path = generatePath(PATH.courseDetail, {
                        slug: e.course.slug,
                        id: e.course.id,
                    });
                    return (
                        <div key={e.course.id} className='item'>
                            <Link to={path} className='cover'>
                                <img
                                    src={e.course.thumbnailUrl}
                                    alt=''
                                    onError={(e) => {
                                        e.target.src =
                                            "../../public/img/thumbnail-default.jpg";
                                    }}
                                />
                            </Link>
                            <div className='info'>
                                <a href='#' className='name'>
                                    {e.course.title}
                                </a>
                                <div className='date'>
                                    Khai giảng ngày{" "}
                                    {moment(e.course.opening_time).format(
                                        "DD/MM/YYYY"
                                    )}
                                </div>
                                <div className='row'>
                                    <div>
                                        <img
                                            src='/img/clock.svg'
                                            alt=''
                                            className='icon'
                                        />
                                        {e.total_hours} giờ
                                    </div>
                                    <div>
                                        <img
                                            src='/img/play.svg'
                                            alt=''
                                            className='icon'
                                        />
                                        {e.video} videos
                                    </div>
                                    <div>
                                        <img
                                            src='/img/user.svg'
                                            alt=''
                                            className='icon'
                                        />
                                        {e.student} học viên
                                    </div>
                                </div>
                                <div className='process'>
                                    <div className='line'>
                                        <div
                                            className='rate'
                                            style={{ width: `${e.process}%` }}
                                        />
                                    </div>
                                    {e.process}%
                                </div>
                                <Link
                                    to={path}
                                    className='btn overlay round btn-continue'
                                >
                                    Tiếp tục học
                                </Link>
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}

export default ProfileCourse;
