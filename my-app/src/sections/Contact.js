import styled from "styled-components";
import { Device } from "../Devices";
import {TiSocialInstagram, TiSocialLinkedin} from "react-icons/ti";
import {HiOutlineMail} from "react-icons/hi";
import {AiOutlineGithub} from "react-icons/ai";
import {FaTiktok} from "react-icons/fa";


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
                <a href="https://www.instagram.com/maya.esar/" target="_blank"><TiSocialInstagram className="social"/></a>
                <a href="https://www.linkedin.com/in/mayaesar/" target="_blank"><TiSocialLinkedin className="social"/></a>
                <a href="mailto:mayaesar@gmail.com?subject=Let's%20Collaborate"><HiOutlineMail className="social"/></a>
                <a href="https://github.com/mayaesar" target="_blank"><AiOutlineGithub className="social"/></a>
                <a href="https://www.tiktok.com/@mayaesar" target="_blank"><FaTiktok className="social"/></a>
                
                
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
    padding-left: 20px;

    .title{
        
        font-size: 22px;
        font-weight: 500;
    }
    .description{
        font-size: 16px;
        padding-top: 20px;
    }
    .media{
        display: flex;
        gap: 15px;
        position: relative;
        padding-top: 30px;
    }
    a{
        color: #333;
    }
    a:hover{
        color: #FA7268;
    }
    .media .social{
        width: 40px;
        height: 40px;
    }

    @media ${Device.tablet}{
        top: -640px;
        padding: 30px;
        padding-left: 35px;
        .title{
            font-size: 28px;
        }
        .description{
            font-size: 20px;
        }
        .media .social{
            width: 70px;
            height: 70px;
        }
    }
    @media ${Device.laptop}{
        top: -680px;
        padding: 30px;
        padding-left: 60px;
        .title{
            padding-top: 30px;
            font-size: 36px;
            
        }
        .description{
            font-size: 28px;
        }
    }
`;

export default Contact;