import React from "react";
import { useEffect } from "react";

const Slider = () => {
    useEffect(() => {
        $(".slider").flickity({
            contain: true,
            wrapAround: true,
            autoPlay: true,
            freeScroll: false,
            cellAlign: "left",
            prevNextButtons: false,
        });
    }, []);
    return (
        <div className='slider'>
            <div className='item'>
                <div className='container'>
                    <div className='content'>
                        <h2 className='title'>
                            Điều quan trọng không phải là{" "}
                            <span style={{ color: "rgb(229, 57, 53)" }}>
                                vị trí đứng
                            </span>{" "}
                            mà là{" "}
                            <span style={{ color: "rgb(63, 81, 181)" }}>
                                hướng đi
                            </span>
                        </h2>
                        <a
                            href='https://spacedev.vn/roadmap'
                            className='btn main round'
                        >
                            Roadmap
                        </a>
                    </div>
                </div>
                <div className='jarallax-img'>
                    <img src='/img/bg-cover.jpg' alt='' />
                </div>
            </div>
            <div className='item'>
                <div className='container'>
                    <div className='content'>
                        <h2 className='title'>Kiến thức</h2>
                        <h2 className='title'>mở ra trang mới cuộc đời bạn</h2>
                        <a
                            href='https://spacedev.vn'
                            className='btn main round'
                        >
                            KHÓA HỌC
                        </a>
                    </div>
                </div>
                <div className='jarallax-img'>
                    <img src='/img/bg-cover1.jpg' alt='' />
                </div>
            </div>
            <div className='item'>
                <div className='container'>
                    <div className='content'>
                        <h2 className='title'>Chuyên nghiệp</h2>
                        <h2 className='title'>làm cho bạn khác biệt</h2>
                        <a
                            href='https://spacedev.vn/about'
                            className='btn main round'
                        >
                            KHÓA HỌC
                        </a>
                    </div>
                </div>
                <div className='jarallax-img'>
                    <img src='/img/banner3.jpg' alt='' />
                </div>
            </div>
        </div>
    );
};

export default Slider;
