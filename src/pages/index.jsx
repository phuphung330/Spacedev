import React from "react";
import { useState } from "react";

import ListCourse from "../components/ListCourse";
import Modal from "../components/Modal";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimonial";
import { useScrollTop } from "../hooks/useScrollTop";
import Gallery from "../components/Gallery";

function Home() {
    useScrollTop();
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <main id='main'>
            <div className='homepage'>
                <Slider />
                <section className='section-1'>
                    <div className='container'>
                        <h2 className='main-title'>KHÓA HỌC SPACEDEV</h2>
                        <p className='top-des'>
                            Cho dù bạn muốn tìm kiếm công việc, khởi nghiệp,
                            phát triển hoạt động kinh doanh hay chỉ đơn giản là
                            muốn khám phá thế giới, hãy chọn lộ trình học tập mà
                            bạn muốn và bắt đầu câu chuyện thành công của bạn.
                        </p>
                        <div className='textbox' style={{ marginTop: "100px" }}>
                            <h3 className='sub-title'>KHÓA HỌC</h3>
                            <h2 className='main-title'>OFFLINE</h2>
                        </div>
                        <ListCourse limit='?limit=6' />
                        <div className='flex justify-center'>
                            <a href='./course-list.html' className='btn main'>
                                Tất cả khóa học
                            </a>
                        </div>
                    </div>
                </section>
                <section className='section-different'>
                    <div className='container'>
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
                        <div className='row'>
                            <div className='titlebox col-md-6 col-sm-12 col-xs-12'>
                                <h2 className='main-title white textleft'>
                                    <span>Giá trị Cốt lỗi</span> <br /> tại
                                    Spacedev
                                </h2>
                                <div
                                    onClick={() => {
                                        setIsOpenModal(true);
                                    }}
                                    className='videodif'
                                    data-src='video/cfd-video-intro.mp4'
                                >
                                    <img
                                        src='https://svtech.com.vn/wp-content/uploads/2020/07/dexus-office-space.jpg'
                                        alt=''
                                    />
                                    <div className='play-btn btn-video-intro'>
                                        <img src='img/play-icon.svg' alt='' />
                                    </div>
                                </div>
                                <div
                                    className='item'
                                    style={{ marginTop: "35px" }}
                                >
                                    <h4>Sáng tạo và đơn giản</h4>
                                    <p>
                                        Spacedev đề cao những sáng tạo đơn giản
                                        thay đổi thế giới, gia tăng năng suất và
                                        cải thiện cuộc sống.
                                    </p>
                                </div>
                            </div>
                            <div className='contentbox col-md-6 col-sm-12 col-xs-12'>
                                <div className='item'>
                                    <h4>Tập trung vào khách hàng</h4>
                                    <p>
                                        Spacedev được tạo ra với mục tiêu cao
                                        nhất giúp cho việc học trở nên dễ dàng
                                        hơn và kiến thức thật sự ý nghĩa. Những
                                        học viên là đối tượng phục vụ của
                                        spacedev vì thế những yêu cầu chính đáng
                                        của học viên sẽ được nền tảng tiếp thu
                                        và cải thiện.
                                    </p>
                                </div>
                                <div className='item'>
                                    <h4>Gây dựng lòng tin</h4>
                                    <p>
                                        Spacedev luôn trung thực với những gì
                                        mình phát ngôn cũng như công bố trên các
                                        nền tảng mạng xã hội. Trung thực và giữ
                                        chữ tín với học viên, với đối tác và với
                                        những người sáng lập luôn là tiêu chí
                                        hàng đầu giúp nền tảng phát triển bền
                                        vững ở hiện tại và trong tương lai.
                                    </p>
                                </div>
                                <div className='item'>
                                    <h4>Phát triển nhưng không dừng lại</h4>
                                    <p>
                                        Bằng việc áp dụng những công nghệ trên
                                        nền tảng và sự hoàn thiện về chức năng
                                        là mình chứng rõ nhất cho sự chuyên
                                        nghiệp cũng như sự tận tâm của những
                                        người sáng lập nền tảng spacedev.vn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section class="section-3">
            <div class="container">
                <div class="video">
                    <iframe id="video-intro"
                        src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen allowscriptaccess="always"></iframe>
      
                    <div class="video-src" data-src="video/Spacedev-video-intro.mp4"></div>
                    <div class="play-btn btn-video-intro">
                        <img src="img/play-video-btn.png" alt="">
                    </div>
                </div>
            </div>
        </section> */}
                <Testimonial />

                <Gallery />
                <section className='section-action'>
                    <div className='container'>
                        <h3>
                            Học thử trước khi đăng ký khóa học tại Spacedev?
                        </h3>
                        <div className='btn main round bg-white'>Học thử</div>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Home;
