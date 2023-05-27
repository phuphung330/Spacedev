import React from "react";
import { useState } from "react";
import Field from "@/components/Field/index";
import { required, regexp } from "@/utils/validate";
import { useForm } from "@/hooks/useForm";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { courseService } from "@/services/course";
import { useScrollTop } from "../../hooks/useScrollTop";
import { Currency } from "@/utils/currency";
import { useEffect } from "react";
import { useFetch } from "@/hooks/useFetch";
import Skeleton from "@/components/Skeleton";
import Select from "@/components/Select";
import CheckBox from "@/components/CheckBox";
import { useAuth } from "@/components/AuthContext";
import { message } from "antd";
import { PATH } from "@/config/path";
import { useAsync } from "@/hooks/useAsync";
import { handleError } from "@/utils/handleError";
import Button from "@/components/Button";

function Register() {
    const { user } = useAuth();
    const [isSuccess, setIsSuccess] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const { excute: registerService, loading: registerLoading } = useAsync(
        courseService.Register
    );

    useEffect(() => {
        if (!user) {
            message.warning("Vui lòng đăng nhập trước khi đăng ký");
            navigate(PATH.signin, { state: { redirect: pathname } });
        }
    }, [user]);

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

    const { validate, Register, values } = useForm(
        {
            name: [required()],
            email: [required(), regexp("email")],
            phone: [required(), regexp("number")],
            fb: [
                required(),
                regexp(
                    /(?:https?:\/\/)?(?:www\.)?(mbasic.facebook|m\.facebook|facebook|fb)\.(com|me)\/(?:(?:\w\.)*#!\/)?(?:pages\/)?(?:[\w\-\.]*\/)*([\w\-\.]*)/,
                    "field only accept facebook url, please try again."
                ),
            ],
            payment: [required()],
        },
        {
            email: user?.username,
            name: user?.name,
            fb: user?.fb,
            phone: user?.phone,
            payment: user?.payment,
        }
    );

    const onSubmit = async () => {
        try {
            if (validate()) {
                const res = await registerService(id, values);
                console.log(res);
                message.success(res.message);

                setIsSuccess(true);

                console.log("validate success");
            } else {
                console.log("validate failed");
            }
        } catch (err) {
            handleError(err);
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

                            <Link
                                to={PATH.profile.course}
                                class='btn main rect'
                            >
                                Chuyển sang trang khoá học của tôi
                            </Link>
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
                                    {...Register("phone")}
                                />
                                <Field
                                    label='Email'
                                    required
                                    placeholder='Email của bạn'
                                    {...Register("email")}
                                    disabled
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
                                    renderInput={(props) => (
                                        <CheckBox {...props}>
                                            Hiện có <strong> 300 COIN</strong>
                                        </CheckBox>
                                    )}
                                />
                                <Field
                                    required
                                    label='Hình thức thanh toán'
                                    {...Register("payment")}
                                    renderInput={(props) => (
                                        <Select
                                            {...props}
                                            placeholder='Hình thức thanh toán'
                                            options={[
                                                {
                                                    value: "chuyen-khoan",
                                                    label: "Chuyển Khoản",
                                                },
                                                {
                                                    value: "thanh-toan-tien-mat",
                                                    label: "Thanh toán tiền mặt",
                                                },
                                            ]}
                                        />
                                    )}
                                />

                                <Field
                                    label='Ý Kiến cá nhân'
                                    placeholder='Mong muốn cá nhân và lịch bạn có thể học.'
                                    {...Register("note")}
                                />

                                <Button
                                    onClick={onSubmit}
                                    loading={registerLoading}
                                    className='btn main rect'
                                >
                                    đăng ký
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Register;
