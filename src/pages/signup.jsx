import React from "react";
import { Link } from "react-router-dom";
import { PATH } from "../config/path";
import { useAsync } from "../hooks/useAsync";
import { useForm } from "../hooks/useForm";
import { userService } from "../services/user";
import { regexp, required, confirmPassword, minMax } from "../utils/validate";
import Button from "../components/Button";
import styled from "styled-components";
import Input from "../components/Input";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { message } from "antd";
import classNames from "classnames";

const ErrorStyle = styled.p`
    color: red;
    margin-bottom: 2px;
`;
function SignUp() {
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
    const { excute: signup, loading } = useAsync(userService.register);
    const { excute: resendEmail, loading: resedEmailLoading } = useAsync(
        userService.resendRegister
    );
    const { validate, Register, reset, values } = useForm({
        name: [required(), minMax(6, 18)],
        username: [required(), regexp("email")],
        password: [required(), regexp("password")],
        confirmPassword: [required(), confirmPassword("password")],
    });
    const onSubmit = async () => {
        try {
            if (validate()) {
                console.log("validate success");
                const res = await signup(values);
                if (res) {
                    message.success(res.message);

                    setIsSignUpSuccess(true);
                }
            } else {
                console.log("validate failed");
            }
        } catch (err) {
            console.log(err);
            message.error(err?.response?.data?.message);
        }
    };

    const onResendEmail = async (ev) => {
        ev.preventDefault();
        try {
            await resendEmail({ username: values.username });
            message.success("Gửi email kích hoạt thành công");
        } catch (err) {
            console.log(err);
            message.error(err?.response?.data?.message);
        }
    };
    return (
        <main id='main'>
            {isSignUpSuccess ? (
                <div class='register-success flex-column'>
                    <div className='container'>
                        <div class='wrap container'>
                            <div className='wrap-content'>
                                <div class='main-title'>
                                    Đăng ký tài khoản thành công
                                </div>
                                <p className='mt-2'>
                                    Chúc mừng bạn đã đăng ký thành công tài
                                    khoản tại Spacedev. Bạn vui lòng vào email
                                    đã đăng ký để xác nhận đăng ký tài khoản.
                                    <br />
                                    Nếu bạn không nhận được email, vui lòng bấm
                                    <strong>
                                        "Gửi lại email kích hoạt"
                                    </strong>{" "}
                                    <br />
                                    <a
                                        className={classNames(
                                            " mt-2 inline-block link",
                                            {
                                                "opacity-50 pointer-events-none":
                                                    resedEmailLoading,
                                            }
                                        )}
                                        href='#'
                                        loading={resedEmailLoading}
                                        onClick={onResendEmail}
                                    >
                                        Gửi lại email kích hoạt &nbsp;
                                        {resedEmailLoading && (
                                            <LoadingOutlined />
                                        )}
                                    </a>
                                </p>
                            </div>

                            <a
                                href='#'
                                onClick={(ev) => {
                                    reset();
                                    ev.preventDefault();
                                    setIsSignUpSuccess(false);
                                }}
                                class='btn main rect'
                            >
                                Quay lại
                            </a>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='auth'>
                    <div className='wrap'>
                        <h2 className='title'>Đăng ký</h2>
                        <Input
                            {...Register("username")}
                            placeholder='Email của bạn'
                        />
                        <Input
                            placeholder='Họ và tên bạn'
                            {...Register("name")}
                        />
                        <Input
                            type='password'
                            placeholder='Nhập password'
                            {...Register("password")}
                        />
                        <Input
                            type='password'
                            placeholder='Xác nhận lại password'
                            {...Register("confirmPassword")}
                        />

                        <p className='policy'>
                            Bằng việc đăng kí, bạn đã đồng ý{"  "}
                            <a href='#'>Điều khoản bảo mật</a> của Spacedev
                        </p>
                        <Button
                            loading={loading}
                            onClick={onSubmit}
                            className='mt-4'
                        >
                            Đăng ký
                        </Button>
                        <div className='text-register flex justify-center items-center'>
                            <span>Bạn đã có tài khoản?</span>
                            {"  "}
                            <Link className='link' to={PATH.signin}>
                                &nbsp;Đăng Nhập
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
export default SignUp;
