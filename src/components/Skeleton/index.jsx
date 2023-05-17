import React from "react";
import { SkeletonStyle } from "./styles";

function Skeleton({ children, width, height, shape = "rectangle", ...props }) {
    return (
        <SkeletonStyle
            {...props}
            className={`${shape} ${props.className ?? ""}`}
            style={{ width, height, ...props.style }}
        >
            {children}
        </SkeletonStyle>
    );
}

export default Skeleton;
