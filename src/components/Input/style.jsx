import styled from "styled-components";

export const InputStyle = styled.div`
    position: relative;
    &.error {
        input {
            border-color: red;
            color: red;
        }
    }
`;

export const ErrorText = styled.div`
    position: absolute;
    color: red;
    bottom: -7px;
    font-size: 0.875rem;
    font-style: italic;
`;
