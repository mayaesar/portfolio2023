import styled from "styled-components";
import { Device } from "../Devices";


const About = () => {

    return (
        <Wrapper>
            <div className="title">
                <p>About me</p>
            </div>
            <div className="paragraph">
                <p>
                I'M A FULL-STACK WEB DEVELOPER, WEB DESIGNER, CONTENT CREATOR READY TO 
                SHOW THE WORLD WHAT I'VE GOT! <br/><br/>

                I started dancing at age 12 as a way to express myself and channel my creativity. Dancing taught me 
                the joy of creating something from nothing and inspired me to pursue a career as a creator. In grade 
                9, I discovered the art of coding and found another outlet to tell stories through media and technology. <br/><br/>

                Web development has combined my passions for creativity and technology. I've honed my coding skills and 
                explored multimedia and design. I'm excited to continue this journey and grow my knowledge and skills.  <br/><br/>
                </p>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    color: #333;
    background: #EBD9FE;
    position: relative;
    top: -160px;
    padding-bottom: 60px;
    padding-top: 40px;
    .title{
        padding-left: 20px;
        font-size: 22px;
        font-weight: 500;
    }
    .paragraph{
        padding: 20px;
        font-size: 15px;
    }

`;

export default About;