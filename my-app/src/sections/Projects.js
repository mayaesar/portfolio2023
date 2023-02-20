import styled from "styled-components";
import { Device } from "../Devices";
import { useState } from "react";
import PojectCards from "../components/ProjectCards";

const Projects = () => {
    return (
        <Wrapper>
            <div className="title">
                <p>Some things I've created</p>
            </div>
            <PojectCards />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    position: relative;
    top: -460px;
    padding-left: 20px;
    padding-bottom: 40px;

    .title{
        font-size: 22px;
        font-weight: 500;
        color: #fff;
    }
    @media ${Device.tablet}{
        height: 500px;
        padding: 30px;
        top: -830px;
        padding-bottom: 90px;
        .title{
            font-size: 28px;
            padding-bottom: 25px;
            padding: 5px;
        }
    }
`;


export default Projects;