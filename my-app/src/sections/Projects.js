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

    /* .category{
        position: relative;
        color: #333;
        width: 35%;
        left: -40px;
        top: 20px;
        padding-left: 50px;
        background-color: #EBD9FE;
        border-radius: 40px;
        list-style: none;
    }
    .category li{
        position: relative;
        top: -30px;
        padding-bottom: 5px;
    } */
`;

export default Projects;