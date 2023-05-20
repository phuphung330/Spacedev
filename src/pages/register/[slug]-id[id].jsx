import React from "react";
import { useState } from "react";
import Field from "@/components/Field/index";
import { required, regexp } from "@/utils/validate";
import { useForm } from "@/hooks/useForm";
import { useParams } from "react-router-dom";
import { courseService } from "@/services/course";
import { useScrollTop } from "../../hooks/useScrollTop";
import { Currency } from "@/utils/currency";
import { useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import Skeleton from "@/components/Skeleton";

function Register() {
    const [isSuccess, setIsSuccess] = useState(false);
    const { id } = useParams();

    const { data, loading } = useFetch(
        () => courseService.getCourseDetail(id),
        [id]
    );

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth",
        });
    }, [id]);

    const { validate, Register, values } = useForm({
        name: [required()],
        email: [required(), regexp("email")],
        number: [required(), regexp("number")],
        fb: [
            required(),
            regexp(
                /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
                "field only accept facebook url, please try again."
            ),
        ],
    });

    const onSubmit = () => {
        if (validate()) {
            setIsSuccess(true);
            console.log("validate success");
        } else {
            console.log("validate failed");
        }
    };
    if (loading)
        return (
            <section className='register-course'>
                <div className='container'>
                    <div className='wrap container flex flex-col items-center'>
                        <div className='main-sub-title'>
                            <Skeleton height={20} width={80} />
                        </div>
                        <h1 className='main-title'>
                            <Skeleton height={45} width={450} />
                        </h1>
                        <div className='main-info'>
                            <div className='date'>
                                <Skeleton height={15} width={175} />
                            </div>
                            <div className='time'>
                                <Skeleton height={15} width={175} />
                            </div>
                            <div className='time'>
                                <Skeleton height={15} width={175} />
                            </div>
                        </div>
                        <Skeleton
                            style={{ marginTop: 40 }}
                            width={650}
                            height={720}
                        />
                    </div>
                </div>
            </section>
        );
    let { data: detail } = data;

    return (
        <main id='main'>
            {isSuccess ? (
                <div class='register-success'>
                    <div className='container'>
                        <div class='wrap container'>
                            <div className='wrap-content'>
                                <div class='main-title'>đăng ký thành công</div>
                                <p>
                                    <strong>
                                        Chào mừng {values.name} đã trở thành
                                        thành viên mới của Spacedev Team.
                                    </strong>{" "}
                                    <br />
                                    Cảm ơn bạn đã đăng ký khóa học tại{" "}
                                    <strong>Spacedev</strong>, chúng tôi sẽ chủ
                                    động liên lạc với bạn thông qua facebook
                                    hoặc số điện thoại của bạn.
                                </p>
                            </div>

                            <a href='/' class='btn main rect'>
                                về trang chủ
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <section className='register-course'>
                    <div className='container'>
                        <div className='wrap container'>
                            <div className='main-sub-title'>ĐĂNG KÝ</div>
                            <h1 className='main-title'>{detail?.title}</h1>
                            <div className='main-info'>
                                <div className='date'>
                                    <strong>Khai giảng:</strong> 15/11/2020
                                </div>
                                <div className='time'>
                                    <strong>Thời lượng:</strong> 18 buổi
                                </div>
                                <div className='time'>
                                    <strong>Học phí:</strong>{" "}
                                    {Currency(detail?.money)}đ
                                </div>
                            </div>
                            <div className='form'>
                                <Field
                                    label='Họ và Tên'
                                    required
                                    placeholder='Họ và tên bạn'
                                    {...Register("name")}

                                    // value={form.name || ""}
                                    // onChange={(ev) =>
                                    //     setForm({
                                    //         ...form,
                                    //         name: ev.target.value,
                                    //     })
                                    // }
                                />
                                <Field
                                    label='Số điện thoại'
                                    required
                                    placeholder='Số điện thoại của bạn'
                                    {...Register("number")}
                                />
                                <Field
                                    label='Email'
                                    required
                                    placeholder='Email của bạn'
                                    {...Register("email")}
                                />
                                <Field
                                    label='URL Facebook'
                                    required
                                    placeholder='https://facebook.com'
                                    {...Register("fb")}
                                />

                                <Field
                                    label='Sử dụng COIN'
                                    {...Register("coin")}
                                    renderInput={(props) => {
                                        return (
                                            <div className='checkcontainer'>
                                                Hiện có{" "}
                                                <strong>300 COIN</strong>
                                                {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                                {/* Cần ít nhất 200 COIN để giảm giá */}
                                                <input
                                                    type='checkbox'
                                                    {...props}
                                                />
                                                <span className='checkmark' />
                                            </div>
                                        );
                                    }}
                                />
                                <Field
                                    label='Hình thức thanh toán'
                                    {...Register("payment")}
                                    renderInput={(props) => {
                                        return (
                                            <div className='select'>
                                                <div className='head'>
                                                    Chuyển khoản
                                                </div>
                                                <div className='sub'>
                                                    <a href='#'>Chuyển khoản</a>
                                                    <a href='#'>
                                                        Thanh toán tiền mặt
                                                    </a>
                                                </div>
                                            </div>
                                        );
                                    }}
                                />

                                <Field
                                    label='Ý Kiến cá nhân'
                                    placeholder='Mong muốn cá nhân và lịch bạn có thể học.'
                                    {...Register("note")}
                                />

                                <button
                                    onClick={onSubmit}
                                    className='btn main rect'
                                >
                                    đăng ký
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Register;
