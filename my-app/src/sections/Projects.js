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
`;

export default Projects;