import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import Input from "@/components/Input";
import { useForm } from "@/hooks/useForm";
import { required } from "@/utils/validate";
import Button from "@/components/Button";
import { useEffect } from "react";
import { useState } from "react";
import ProgressLoader from "@/components/ProgressLoader";

const DemoReactjs = () => {
    const [random, setRandom] = useState(Math.random());
    useEffect(() => {
        setInterval(() => {
            setRandom(Math.random());
        }, 1000);
    }, []);
    let inputRef = useRef();

    useEffect(() => {
        inputRef.current.setValue("phu phung");
    }, []);
    const { validate, Register } = useForm({
        username: [required()],
    });

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (validate()) {
            window.alert("submit thanh cong");
        }
    };
    return (
        <main className='main'>
            <div className='auth'>
                <div className='wrap'>
                    <h2 className='title'>Đăng ký</h2>
                    <Input
                        ref={inputRef}
                        {...Register("username")}
                        placeholder='Email của bạn'
                    />

                    <p className='policy'>
                        Bằng việc đăng kí, bạn đã đồng ý{"  "}
                        <a href='#'>Điều khoản bảo mật</a> của Spacedev
                    </p>
                    <Button onClick={onSubmit} className='mt-4'>
                        Đăng ký
                    </Button>
                    <div>
                        <img
                            style={{ width: 60, height: 60 }}
                            src='./img/logo-test.gif'
                        ></img>
                        <ProgressLoader />
                    </div>
                    <div className='text-register flex justify-center items-center'>
                        <span>Bạn đã có tài khoản?</span>
                        {"  "}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DemoReactjs;
