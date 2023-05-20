import classNames from "classnames";
import React from "react";
import styled from "styled-components";
const ErrorS = styled.span`
    position: absolute;
    top: 100%;
    left: 230px;
    color: red;
    font-size: 15px;
    font-style: italic;
    animation: myAnim 1s ease 0s 1 normal none;
    @media screen and (min-width: 320px) and (max-width: 767px) {
        left: unset;
    }
    @keyframes myAnim {
        0% {
            transform: translateX(0);
        }

        100% {
            transform: translateX(10px);
        }
    }
`;

function Field({
    label,
    required,
    type = "text",
    error,
    renderInput,
    ...props
}) {
    return (
        <label className={classNames("relative", { error: error })}>
            <p>
                {label} {required && <span>*</span>}
            </p>
            {renderInput ? (
                renderInput?.(props)
            ) : (
                <input type={type} {...props} />
            )}
            {error && <ErrorS>{error}</ErrorS>}
        </label>
    );
}

export default Field;
