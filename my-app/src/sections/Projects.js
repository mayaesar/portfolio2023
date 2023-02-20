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
    @media ${Device.mobileL}{
        top: -640px;
        height: 300px;
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
    @media ${Device.laptop}{
        height: 500px;
        top: -1050px;
        padding: 70px;
        .title{
            font-size: 36px;
        }
    }
    @media ${Device.laptop}{
        height: 500px;
        top: -1150px;
    }
`;


export default Projects;