import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "@/config/path";

function Footer() {
    return (
        <>
            <footer id='footer'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-5 left'>
                            <p className='des'>
                                Kiến Thức mở Ra Trang Mới Cuộc Đời Bạn
                            </p>
                            <p className='address'>
                                Tòa nhà Robot, 308, Điện Biên Phủ, Phường 4,
                                Quận 3, TP. Hồ Chí Minh
                            </p>
                            <p className='phone'>(+84) 949 816 596</p>
                            <div className='social'>
                                <a href='#'>
                                    <img src='/img/fb-icon.png' alt='' />
                                </a>
                                <a href='#'>
                                    <img src='/img/email-icon.png' alt='' />
                                </a>
                                <a href='#'>
                                    <img src='/img/skype-icon.png' alt='' />
                                </a>
                            </div>
                        </div>
                        <div className='right'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link to={PATH.home}>Trang chủ</Link>
                                    </li>
                                    <li>
                                        <Link to={PATH.course}>Khóa Học</Link>
                                    </li>
                                    <li>
                                        <Link to={PATH.payment}>
                                            Thanh toán
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={PATH.coin}>Điều khoản</Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <a href='#' className='back-to-top'>
                        <div className='line' />
                        CUỘN LÊN
                    </a>
                </div>
                <div className='copy-right'>
                    <div className='container'>
                        <div className='flex gap-2'>
                            2020 spacedev.vn
                            <div className='select flex gap-1 cursor-pointer items-center'>
                                <img
                                    width={15}
                                    src='/img/icon-lang.svg'
                                    alt=''
                                />
                                Tiếng Việt
                                <img
                                    src='/img/nav-caret.svg'
                                    style={{ marginTop: "13px" }}
                                />
                            </div>
                        </div>
                        <p>Được thiết kế và lập trình bởi Spacedev Team</p>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
