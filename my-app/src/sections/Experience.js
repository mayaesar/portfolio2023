import { useState } from "react";
import styled from "styled-components";
import { Device } from "../Devices";
import ExpCards from "../components/ExpCards";

const Experience = ({isDark}) => {
    const [selected, setSelected] = useState('education');
    return (
        <Wrapper isDark={isDark}>
            <div className="title">
                <p>Education & Experience </p>
            </div>
            <div className="category">
                <div className={selected=='education'? 'selected':''} onClick={() => setSelected('education')}>Education -</div>
                <div className={selected=='skill'? 'selected':''} onClick={() => setSelected('skill')}>Skills -</div>
                <div className={selected=='experience'? 'selected':''} onClick={() => setSelected('experience')}>Experience -</div>
                <div className={selected=='freelance'? 'selected':''} onClick={() => setSelected('freelance')}>Freelance -</div>
            </div>
            <div className="card"><ExpCards category={selected}/></div>
            
        </Wrapper>
    );
}

const Wrapper = styled.div`
    padding-top: 20px;
    .title{
        background-color: ${({ isDark }) => isDark ? "#EBD9FE" : "#B428FF"};
        padding: 20px;
        width: 330px;
        font-size: 18px;
        color: ${({ isDark }) => isDark ? "#333" : "#fff"};
        padding-left: 90px;
        border-radius: 50px;
        position: relative;
        left: -30px;
        margin-top: 10px;
    }
    .category{
        padding-top: 20px;
        padding-right: 6px;
        text-align: right;
        color: ${({ isDark }) => !isDark ? "#333" : "#fff"};
    }
    .category div{
        padding-top: 5px;
    }
    .selected{
        color: ${({ isDark }) => isDark ? "#EBD9FE" : "#B428FF"};
    }
`;

export default Experience;