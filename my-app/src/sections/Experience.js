import { useState } from "react";
import styled from "styled-components";
import ExpDisplay from "../components/ExpDisplay";
import { Device } from "../Devices";

const Experience = () => {
    const [selected, setSelected] = useState('education');
    return (
        <Wrapper>
            <div className="selection">
                <p className={selected == 'education'? "select":""} onClick={ () => setSelected('education')}>Education</p>
                <p className={selected == 'experience'? "select":""} onClick={ () => setSelected('experience')}>Experience</p>
            </div>
            <ExpDisplay selected={selected}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    top: -365px;
    background-color: #FA7268;
    color: #333;
    padding-left: 20px;

    .selection{
        padding-top: 20px;
        width: 60%;
        margin: auto;
        font-size: 20px;
        display: flex;
        gap: 20px
    }
    .select{
        color: #fff;

    }
`;

export default Experience;