import React, { useMemo } from "react";
import { useState } from "react";
import { generatePath, useParams, Link } from "react-router-dom";
import { Accordion } from "@/components/Accordion";
import CourseCards from "@/components/CourseCards";

import Skeleton from "@/components/Skeleton";
import { PATH } from "@/config/path";
import { useFetch } from "@/hooks/useFetch";
import { useScrollTop } from "@/hooks/useScrollTop";
import { courseService } from "@/services/course";
import { Currency } from "@/utils/currency";
import moment from "moment/moment";
import { color } from "@/utils/color";
import Modal from "@/components/Modal";
import { useEffect } from "react";

function CourseDetail() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const { id } = useParams();
    useScrollTop([id]);

    const { data, loading } = useFetch(
        () => courseService.getCourseDetail(id),
        [id]
    );

    const { data: related } = useFetch(
        () => courseService.getRelated(id),
        [id]
    );
    const { data: detail } = data || {};

    const { path, openTime } = useMemo(() => {
        if (detail) {
            const path = generatePath(PATH.courseRegister, {
                slug: detail.slug,
                id: detail.id,
            });
            const openTime = moment(detail.opening_time).format("DD/MM/YYYY");
            return { path, openTime };
        }
        return {};
    }, [detail]);

    if (loading) {
        return (
            <div className='course-detail'>
                <section
                    className='banner style2'
                    style={{ "--background": "#cde6fb" }}
                >
                    <div className='container'>
                        <div className='info'>
                            <Skeleton height={64} width={535} />
                            <div className='row'>
                                <div className='date'>
                                    <Skeleton width={175} height={25} />
                                </div>
                                <div className='time'>
                                    <Skeleton width={175} height={25} />
                                </div>
                            </div>
                            <Skeleton
                                style={{ marginTop: 35 }}
                                width={120}
                                height={45}
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <main id='main'>
            <div className='course-detail'>
                <section
                    className='banner style2'
                    style={{
                        "--background": `${color(detail, "banner")}`,
                    }}
                >
                    <div className='container'>
                        <div className='info'>
                            <h1>{detail.title}</h1>
                            <div className='row'>
                                <div className='date'>
                                    <strong>Khai giảng:</strong> {openTime}
                                </div>
                                <div className='time'>
                                    <strong>Thời lượng:</strong> 18 buổi
                                </div>
                            </div>
                            <Link
                                className='btn white round'
                                style={{
                                    "--color-btn": `${color(detail, "btn")}`,
                                }}
                                to={path}
                            >
                                đăng ký
                            </Link>
                        </div>
                    </div>
                    <div className='bottom'>
                        <div className='container'>
                            <div className='video'>
                                <Modal
                                    isMaskClose
                                    visible={isOpenModal}
                                    onCancel={() => {
                                        setIsOpenModal(false);
                                    }}
                                >
                                    <iframe
                                        width='800'
                                        height='500'
                                        src='https://www.youtube.com/embed/8pDqJVdNa44'
                                        title='YouTube video player'
                                        frameborder='0'
                                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                        allowfullscreen
                                    ></iframe>
                                </Modal>
                                <div
                                    onClick={() => {
                                        setIsOpenModal(true);
                                    }}
                                    className='flex items-center justify-center'
                                >
                                    <div className='icon'>
                                        <img
                                            src='/img/play-icon-white.png'
                                            alt=''
                                        />
                                    </div>{" "}
                                    <span>giới thiệu</span>
                                </div>
                            </div>
                            <div className='money'>
                                {Currency(detail.money)}đ
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-2'>
                    <div className='container'>
                        <p className='des'>{detail.long_description}</p>
                        <h2 className='title'>giới thiệu về khóa học</h2>
                        <div className='cover'>
                            <img src='/img/course-detail-img.png' alt='' />
                        </div>
                        <h3 className='title'>nội dung khóa học</h3>
                        <Accordion.Group>
                            {detail?.content?.map((e, i) => (
                                <Accordion date={i + 1} key={i} {...e}>
                                    {e.content}
                                </Accordion>
                            ))}
                        </Accordion.Group>

                        <h3 className='title'>yêu cầu cần có</h3>
                        <div className='row row-check'>
                            {detail?.required?.map((e, i) => (
                                <div key={i} {...e} className='col-md-6'>
                                    {e.content}
                                </div>
                            ))}
                        </div>
                        <h3 className='title'>hình thức học</h3>
                        <div className='row row-check'>
                            {detail?.benefits?.map((e, i) => (
                                <div key={i} {...e} className='col-md-6'>
                                    {e.content}
                                </div>
                            ))}
                        </div>
                        <h3 className='title'>
                            <div className='date-start'>lịch học</div>
                            <div className='sub'>
                                *Lịch học và thời gian có thể thống nhất lại
                                theo số đông học viên.
                            </div>
                        </h3>
                        <p>
                            <strong>Ngày bắt đầu: </strong> {openTime} <br />
                            <strong>Thời gian học: </strong> {detail.schedule}
                        </p>
                        <h3 className='title'>Người dạy</h3>
                        <div className='teaches'>
                            <div className='teacher'>
                                <div className='avatar'>
                                    <img src={detail.teacher.avatar} alt='' />
                                </div>
                                <div className='info'>
                                    <div className='name'>
                                        Đặng Thuyền Vương
                                    </div>
                                    <div className='title'>
                                        Founder Spacedev &amp; Fullstack
                                        developer
                                    </div>
                                    <p
                                        className='intro'
                                        dangerouslySetInnerHTML={{
                                            __html: detail.teacher.description,
                                        }}
                                    ></p>
                                    <p>
                                        <strong>Website:</strong>{" "}
                                        <a href='https://dangthuyenvuong.github.io/'>
                                            https://dangthuyenvuong.github.io/
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div className='user'>
                                <img src='/img/user-group-icon.png' alt='' />{" "}
                                {detail.number_student_default} bạn đã đăng ký
                            </div>
                            <Link
                                to={path}
                                className='btn main btn-register round'
                            >
                                đăng ký
                            </Link>
                            <div className='btn-share btn overlay round btn-icon'>
                                <img src='/img/facebook.svg' alt='' />
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section-4'>
                    <div className='container'>
                        <div className='textbox'>
                            <h3 className='sub-title'>Khóa học</h3>
                            <h2 className='main-title'>Liên quan</h2>
                        </div>
                        <div className='list row'>
                            {related &&
                                related?.data.map((e) => (
                                    <CourseCards key={e.id} {...e} />
                                ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default CourseDetail;
