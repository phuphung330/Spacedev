import React from "react";
import styled from "styled-components";
import { useContext, useState } from "react";
import { createContext } from "react";
import classNames from "classnames";
const Context = createContext({ activeAccordion: -1 });
const ContentWrapStyle = styled.div`
    display: block !important;
`;
export const Accordion = ({ index, date, title, children }) => {
    const { onActive, activeAccordion } = useContext(Context);
    const _onClick = () => {
        onActive(index);
    };
    const active = activeAccordion === index;
    return (
        <div className={classNames("accordion", { active })}>
            <div onClick={_onClick} className='accordion__title'>
                {date && <div className='date'>Ngày {date}</div>}
                <h3>{title}</h3>
            </div>
            {active && (
                <ContentWrapStyle
                    className='content'
                    dangerouslySetInnerHTML={{ __html: children }}
                />
            )}
        </div>
    );
};
Accordion.Group = ({ children }) => {
    const [activeAccordion, setActiveAccordion] = useState(-1);
    const onActive = (i) => {
        setActiveAccordion(activeAccordion === i ? -1 : i);
    };
    return (
        <Context.Provider value={{ onActive, activeAccordion }}>
            {React.Children.map(children, (child, i) =>
                React.cloneElement(child, { index: i })
            )}
        </Context.Provider>
    );
};

function Accordion2({ title, date, active, onClick, children }) {
    return (
        <div className='accordion'>
            <div onClick={onClick} className='accordion__title'>
                {date && <div className='date'>Ngày {date}</div>}

                <h3>{title}</h3>
            </div>
            {active && (
                <ContentWrapStyle
                    className='content'
                    dangerouslySetInnerHTML={{ __html: children }}
                />
            )}
        </div>
    );
}

export default Accordion2;
