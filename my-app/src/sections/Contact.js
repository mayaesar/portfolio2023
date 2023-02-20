import styled from "styled-components";
import { Device } from "../Devices";


const Contact = () => {
    return (
        <Wrapper>
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
    color: #333;
    background: #EBD9FE;
    position: relative;
    top: -510px;
    padding-bottom: 60px;
    padding-top: 40px;

    .title{
        padding-left: 20px;
        font-size: 22px;
        font-weight: 500;
    }
    .description{
        width: 90%;
        font-size: 16px;
        margin: auto;
        padding-top: 20px;
    }
    .media{
        display: flex;
        gap: 15px;
        position: relative;
        top: 30px;
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