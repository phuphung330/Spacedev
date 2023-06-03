import React from "react";
import { useRef } from "react";
import { forwardRef } from "react";
import Input from "@/components/Input";
import { useForm } from "@/hooks/useForm";
import { required } from "@/utils/validate";
import Button from "@/components/Button";
import { useEffect } from "react";
import { useState } from "react";

import { useAuth } from "@/components/AuthContext";
import { CountStyle } from "./demo-useref";
import { useReducer } from "react";
// const innitialState = { count: 0 };

const DemoReactjs = () => {
    // const [random, setRandom] = useState(Math.random());
    // useEffect(() => {
    //     setInterval(() => {
    //         setRandom(Math.random());
    //     }, 1000);
    // }, []);

    // const RandomNum = random;
    // let inputRef = useRef();

    // useEffect(() => {
    //     inputRef.current.setValue("phu phung");
    // }, []);

    return (
        <CountStyle style={{ flexDirection: "row" }}>
            <Button></Button>
        </CountStyle>
    );
};

export default DemoReactjs;
