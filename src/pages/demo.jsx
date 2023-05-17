import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { useRef } from "react";

const ContextCount = createContext({});

function Demo() {
    let ref = useRef(0);
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
            ref.current = ref.current + 1;
        }, 1000);
    }, [count]);
    const onDecre = () => {
        setCount(count - 1);
    };
    const onIncre = () => {
        setCount(count + 1);
    };
    return (
        <div style={{ padding: 100 }}>
            <ContextCount.Provider value={{ ref, count, onDecre, onIncre }}>
                <Count />
            </ContextCount.Provider>
        </div>
    );
}

export default Demo;

const CountStyle = styled.div`
    border: 1px solid #ccc;
    padding: 40px;
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100px;
`;
const Count = () => {
    const { count, onDecre, onIncre } = useContext(ContextCount);

    return (
        <CountStyle>
            <Button onClick={onDecre}> -1</Button>
            {count}

            <Button onClick={onIncre}>+1</Button>
        </CountStyle>
    );
};
