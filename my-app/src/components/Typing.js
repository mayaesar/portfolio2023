import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import { Device } from "../Devices";

const Typing = ({text}) => {

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
        }, 150);
    
        return () => {
            clearTimeout(timeoutId);
        }
    }, [typing]);


    return (
        <Wrapper>
            <span> {typing} </span>
            <span className="cursor">|</span>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .cursor{
        font-size: 30px;
        color: #EBD9FE;
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
    @media ${Device.laptop}{
        .cursor{
            font-size: 60px;
        }
    }
`;



export default Typing;