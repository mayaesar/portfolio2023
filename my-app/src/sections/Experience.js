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
    padding-bottom: 40px;
    .selection{
        padding-top: 50px;
        width: 100%;
        margin: auto;
        padding-left: 20px;
        font-size: 22px;
        font-weight: 500;
        display: flex;
        gap: 20px;
        padding-bottom: 25px;
    }
    .selection p:hover{
        color: #fff;
        
    }
    .select{
        color: #fff;
    }
    @media ${Device.tablet}{
        top: -560px;
        .selection{
            padding-left: 100px;
            font-size: 28px;
        }
    }
    @media ${Device.laptop}{
        top: -610px;
        .selection{
            padding-left: 100px;
            font-size: 34px;
            padding-top: 40px;
        }
    }
`;

export default Experience;