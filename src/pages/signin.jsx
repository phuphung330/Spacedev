import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../components/AuthContext";
import { PATH } from "../config/path";
import { useForm } from "../hooks/useForm";
import { regexp, required } from "../utils/validate";
import Input from "../components/Input";
import Button from "../components/Button";
import { useAsync } from "../hooks/useAsync";

function SignIn() {
    const { login } = useAuth();
    const { loading, excute: signin } = useAsync(login);

    // const navigate = useNavigate();

    const { validate, Register, values } = useForm({
        username: [required(), regexp("email")],
        password: [required(), regexp("password")],
    });

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (validate()) {
            signin(values);
            // navigate(PATH.profile.index);
        }
    };

    return (
        <main id='main'>
            <div className='auth'>
                <div className='wrap'>
                    {/* login-form */}
                    <form className='ct_login' onSubmit={onSubmit}>
                        <h2 className='title'>Đăng nhập</h2>
                        <Input
                            {...Register("username")}
                            placeholder='Email của bạn'
                        />
                        <Input
                            {...Register("password")}
                            placeholder='Password của bạn'
                            type='password'
                        />
                        {/* <input
                            type='text'
                            placeholder='Email / Số điện thoại'
                            {...Register("username")}
                        />
                        {errors.username && <p>{errors.username}</p>} */}
                        {/* <input
                            type='password'
                            placeholder='Mật khẩu'
                            {...Register("password")}
                        />
                        {errors.password && <p>{errors.password}</p>} */}
                        <div className='remember'>
                            <label className='btn-remember'>
                                <div>
                                    <input type='checkbox' />
                                </div>
                                <p>Nhớ mật khẩu</p>
                            </label>
                            <Link to={PATH.resetPassword} className='forget'>
                                Quên mật khẩu?
                            </Link>
                        </div>
                        <Button
                            loading={loading}
                            onClick={onSubmit}
                            className='mt-5'
                        >
                            đăng nhập
                        </Button>
                        <div className='text-register'>
                            <span>Nếu bạn chưa có tài khoản?</span>{" "}
                            <Link className='link' to={PATH.signup}>
                                Đăng ký
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default SignIn;
