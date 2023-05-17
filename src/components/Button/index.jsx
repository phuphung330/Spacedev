import React from "react";
import { ButtonStyle } from "./styles";
import { LoadingOutlined } from "@ant-design/icons";

function Button({ children, loading, ...props }) {
    return (
        <ButtonStyle
            {...props}
            disabled={loading}
            className={`btn main rect ${props.className ?? ""}`}
        >
            {loading ? <LoadingOutlined style={{ fontSize: 30 }} /> : children}
        </ButtonStyle>
    );
}

export default Button;
