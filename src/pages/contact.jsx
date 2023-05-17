import React from "react";
import { useState } from "react";
import Field from "../components/Field/index";
import { useForm } from "../hooks/useForm";
import { required, regexp } from "../utils/validate";
import { organizationServices } from "../services/organization";
import { message } from "antd";
import Button from "../components/Button";
import { useAsync } from "../hooks/useAsync";
function Contact() {
    const { excute, loading } = useAsync(organizationServices.contact);
    // const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [nameValue, setNameValue] = useState({});
    const { validate, Register, values, reset } = useForm({
        name: [required()],
        email: [required(), regexp("email")],
        phone: [required(), regexp("number")],
        link: [regexp("link")],
        title: [required()],
        content: [required()],
    });

    const onSubmit = async (ev) => {
        try {
            ev.preventDefault();
            if (validate()) {
                console.log("validate success");
                const res = await excute(values);

                if (res) {
                    setNameValue(values.name);
                    message.success("Chúc mừng bạn đã đăng ký thành công");
                    setIsSuccess(true);
                    reset();
                }
            } else {
                console.log("validate failed");
            }
        } catch (error) {}
    };

    return (
        <main id='main'>
            {isSuccess ? (
                <div class='register-success'>
                    <div className='container'>
                        <div class='wrap container'>
                            <div className='wrap-content'>
                                <div class='main-title'>Liên hệ thành công</div>
                                <p>
                                    <strong>
                                        Chào mừng {nameValue} đã trở thành thành
                                        viên mới của Spacedev Team.
                                    </strong>{" "}
                                    <br />
                                    Cảm ơn bạn đã để lại thông tin liên hệ tại{" "}
                                    <strong>Spacedev</strong>, chúng tôi sẽ chủ
                                    động liên lạc với bạn thông qua facebook
                                    hoặc số điện thoại của bạn.
                                </p>
                            </div>

                            <a
                                href='#'
                                onClick={(ev) => {
                                    ev.preventDefault();
                                    setIsSuccess(false);
                                }}
                                class='btn main rect'
                            >
                                Quay lại
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='register-course'>
                    <section className='section-1 wrap container'>
                        {/* <div class="main-sub-title">liên hệ</div> */}
                        <h2 className='main-title'>HỢP TÁC CÙNG Spacedev</h2>
                        <p className='top-des'>
                            Đừng ngần ngại liên hệ với <strong>Spacedev</strong>{" "}
                            để cùng nhau tạo ra những sản phẩm giá trị, cũng như
                            việc hợp tác với các đối tác tuyển dụng và công ty
                            trong và ngoài nước.
                        </p>
                        <form className='form' onSubmit={onSubmit}>
                            <Field
                                label='Họ và Tên'
                                required
                                placeholder='Họ và tên bạn'
                                {...Register("name")}
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
                            />
                            <Field
                                label='Website'
                                placeholder='Đường dẫn website http://'
                                {...Register("link")}
                            />
                            <Field
                                label='Tiêu đề'
                                required
                                placeholder='Tiêu đề liên hệ'
                                {...Register("title")}
                            />
                            <Field
                                label='Nội dung'
                                placeholder='Nội dung....'
                                required
                                {...Register("content")}
                                renderInput={(props) => {
                                    return (
                                        <textarea
                                            {...props}
                                            cols={30}
                                            rows={10}
                                        />
                                    );
                                }}
                            />

                            <Button loading={loading}>Đăng Ký</Button>
                        </form>
                    </section>
                </div>
            )}
        </main>
    );
}

export default Contact;
