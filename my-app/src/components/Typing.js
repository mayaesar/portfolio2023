import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

const Typing = ({text, isDark}) => {

    const index = useRef(0);
    const [typing, setTyping] = useState('');

    useEffect (() => {
        index.current = 0;
        setTyping('');
    }, [text]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTyping(text.substr(0, index.current + 1));
            index.current += 1;
        }, 200);
    
        return () => {
            clearTimeout(timeoutId);
        }
    }, [typing]);


    return (
        <Wrapper isDark={isDark}>
            <span> {typing} </span>
            <span className="cursor">|</span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .cursor{
        font-size: 20px;
        color: var(--light-secondary-color);
        animation: blink 1s linear infinite;
    }

    @keyframes blink {
        0% {
            opacity: 100%;
        }
        50%{
            opacity: 0%;
        }
    }
`;

export default Typing;