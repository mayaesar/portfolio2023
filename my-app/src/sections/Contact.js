import styled from "styled-components";
import { Device } from "../Devices";


const Contact = ({isDark}) => {
    return (
        <Wrapper isDark={isDark}>
            <div className="title">
                Let's Link!
            </div>
            <div className="description">
                <p> Let's connect and have a conversation. <br/>
                Let's talk creativity. <br/>
                Let's explore projects. <br/>
                Who knows... <br/> we might just be a good fit.</p>
            </div>
            <div className="media">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .title{
        background-color: ${({ isDark }) => isDark ? "#EBD9FE" : "#B428FF"};
        padding: 20px;
        width: 200px;
        font-size: 18px;
        color: ${({ isDark }) => isDark ? "#333" : "#fff"};
        padding-left: 90px;
        border-radius: 50px;
        position: relative;
        top: -120px;
        left: -30px;
        margin-top: 10px;
    }
    .description{
        background-color: ${({ isDark }) => isDark ? "#EBD9FE" : "white"};
        color: #333;
        font-size: 15px;
        padding: 20px;
        width: 85%;
        margin: auto;
        position: relative;
        top: -100px;
        text-align: left;
        border-radius: 40px;
    }
    .media{
        display: flex;
        gap: 15px;
        position: relative;
        top: -80px;
        left: 30px;
    }
    .media div{
        border: 1px solid black;
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }
`;

export default Contact;