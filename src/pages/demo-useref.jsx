import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useRef } from "react";
import Input from "@/components/Input";
import { useEffect } from "react";
import { forwardRef } from "react";

//** dùng ref để lưu trữ giá trị khi state thay đổi , khi state thay đổi , ref sẽ vẫn giữ nguyên giá trị ,
//  dùng useRef để thao tác trực tiếp đến DOM , không cần phải selector bằng js thuần
//  dùng forwardRef để truyền ref vào componnet con , tức là truyền ref từ componnet cha vào component con
// dùng forwardRef ta cần bọc forwardRef trước tham số của component và nhận vào tham số thứ 2 là ref

//
// lấy từ ref.current ,lưu ý là ref sẽ trả về 1 object **//
export const CountStyle = styled.div`
    border: 1px solid #ccc;
    padding: 40px;

    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    font-size: 100px;
`;

const DemoRef = () => {
    const [count, setCount] = useState(0);
    let inputRef = useRef();
    useEffect(() => {
        inputRef.current.setValue("phùng lê phú");
    }, []);
    console.log(inputRef.current);

    return (
        <CountStyle>
            <button> click</button>
            <Input
                ref={inputRef}
                className='mt-14'
                placeholder='nhập vào đây'
            />

            <br />
            <br />
            <br />
        </CountStyle>
    );
};

export default DemoRef;
