import { useAuth } from "@/components/AuthContext";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useAsync } from "@/hooks/useAsync";
import { useForm } from "@/hooks/useForm";
import { userService } from "@/services/user";
import { handleError } from "@/utils/handleError";
import { setToken } from "@/utils/token";
import { confirmPassword, regexp, required } from "@/utils/validate";
import { message } from "antd";
import React from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const SuccessWrapperStyle = styled.div`
    .successWrap {
        max-width: 800px;

        .wrap-content {
            background-color: white;
            text-align: center;
            padding: 50px;
        }
    }
`;

function ResetPassword() {
    const [search] = useSearchParams();
    const code = search.get("code");
    const { getProfile } = useAuth();

    const [isSuccess, setIsSuccess] = useState(false);
    const { loading: resetPasswordLoading, excute: resetPasswordService } =
        useAsync(userService.resetPassword);
    const { loading: changePasswordLoading, excute: changePasswordService } =
        useAsync(userService.changePasswordByCode);
    const resetPasswordForm = useForm({
        username: [required(), regexp("email")],
    });

    const changePasswordForm = useForm({
        password: [required()],
        confirmPassword: [required(), confirmPassword("password")],
    });
    const onSubmitResetPassword = async () => {
        try {
            if (resetPasswordForm.validate()) {
                const res = await resetPasswordService(
                    resetPasswordForm.values
                );
                message.success(res.message);
                setIsSuccess(true);
            }
        } catch (error) {
            handleError(error);
        }
    };
    const onSubmitChangePassword = async () => {
        try {
            if (changePasswordForm.validate()) {
                const res = await changePasswordService({
                    password: changePasswordForm.values.password,
                    code,
                });
                setToken(res.data);
                getProfile();
            }
        } catch (error) {
            handleError(error);
        }
    };

    return (
        <main id='main'>
            <div className='auth' style={{ padding: 50 }}>
                {code ? (
                    <div className='wrap'>
                        <h2 className='title'>Đặt lại mật khẩu</h2>
                        <Input
                            type='password'
                            placeholder='Mật khẩu'
                            {...changePasswordForm.Register("password")}
                        />
                        <Input
                            type='password'
                            placeholder='Nhập lại mật khẩu'
                            {...changePasswordForm.Register("confirmPassword")}
                        />
                        <Button
                            loading={changePasswordLoading}
                            onClick={onSubmitChangePassword}
                        >
                            Đặt lại mật khẩu
                        </Button>
                    </div>
                ) : isSuccess ? (
                    <SuccessWrapperStyle className='container'>
                        <div class='wrap container successWrap'>
                            <div className='wrap-content'>
                                <div class='main-title'>
                                    Gửi lại email lấy lại mật khẩu thành công
                                </div>
                                <p className='mt-2'>
                                    Email đã được gửi lại qua địa chỉ
                                    <br />
                                    <strong>
                                        {resetPasswordForm.values.username}
                                    </strong>{" "}
                                    <br />
                                    vui lòng kiểm tra email
                                </p>
                            </div>

                            <a
                                href='#'
                                onClick={() => {
                                    setIsSuccess(false);
                                }}
                                class='btn main rect'
                            >
                                Quay lại
                            </a>
                        </div>
                    </SuccessWrapperStyle>
                ) : (
                    <div className='wrap'>
                        <h2 className='title'>Đặt lại mật khẩu</h2>
                        <Input
                            placeholder='Email'
                            {...resetPasswordForm.Register("username")}
                        />
                        <Button
                            loading={resetPasswordLoading}
                            onClick={onSubmitResetPassword}
                        >
                            {" "}
                            Đặt lại mật khẩu{" "}
                        </Button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default ResetPassword;
