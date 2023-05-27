import React from "react";
import { InputStyle, ErrorText } from "./style";
import classNames from "classnames";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import { memo } from "react";

const Input = memo(
    forwardRef(({ className, error, type = "text", ...props }, ref) => {
        const inputRef = useRef();
        useImperativeHandle(
            ref,
            () => {
                return {
                    setValue: (value) => {
                        inputRef.current.value = value;
                    },
                };
            },
            []
        );

        return (
            <InputStyle
                className={classNames(className, { "mb-5 error": error })}
            >
                <input ref={inputRef} {...props} type={type} />

                {error && <ErrorText>{error}</ErrorText>}
            </InputStyle>
        );
    }),
    (oldProps, newProps) => {
        return oldProps.value === newProps.value;
    }
);

export default Input;
