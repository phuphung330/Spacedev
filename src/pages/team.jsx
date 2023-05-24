import React from "react";

function Team() {
    return (
        <main id='main'>
            <section className='team'>
                <div className='container'>
                    <div className='top'>
                        <h2 className='main-title'>Spacedev team</h2>
                        <p className='top-des'>
                            Những thành viên founder và các bạn học viên đã đồng
                            hành cùng spacedev để tạo ra môi trường phát triển
                            spacedev platform như ngày hôm nay
                        </p>
                    </div>
                    <div className='list row'>
                        <div className='item col-md-6 col-sm-6'>
                            <div className='wrap'>
                                <div className='cover'>
                                    <img src='img/team/vuong.jpg' alt='' />
                                </div>
                                <div className='info'>
                                    <div className='name'>Vương Đặng</div>
                                    <p className='title'>Spacedev Founder</p>
                                </div>
                            </div>
                        </div>

                        <div className='item col-md-6 col-sm-6'>
                            <div className='wrap'>
                                <div className='cover'>
                                    <img src='img/team/vuong.jpg' alt='' />
                                </div>
                                <div className='info'>
                                    <div className='name'>
                                        Đặng Thuyền Vương
                                    </div>
                                    <p className='title'>
                                        Co-Founder &amp; Front-End Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='item col-md-4 col-sm-4 col-xs-6'>
                            <div className='wrap'>
                                <div className='cover'>
                                    <img src='img/team/kiet.jpg' alt='' />
                                </div>
                                <div className='info'>
                                    <div className='name'>Huỳnh Anh Kiệt</div>
                                    <p className='title'>Spacedev1-Offline</p>
                                </div>
                            </div>
                        </div>
                        <div className='item col-md-4 col-sm-4 col-xs-6'>
                            <div className='wrap'>
                                <div className='cover'>
                                    <img src='img/team/thien.jpg' alt='' />
                                </div>
                                <div className='info'>
                                    <div className='name'>
                                        Lê Châu Hữu Thiện
                                    </div>
                                    <p className='title'>Spacedev1-Offline</p>
                                </div>
                            </div>
                        </div>
                        <div className='item col-md-4 col-sm-4 col-xs-6'>
                            <div className='wrap'>
                                <div className='cover'>
                                    <img src='img/team/an.jpg' alt='' />
                                </div>
                                <div className='info'>
                                    <div className='name'>
                                        Nguyễn Văn Thái An
                                    </div>
                                    <p className='title'>Spacedev1-Offline</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Team;
