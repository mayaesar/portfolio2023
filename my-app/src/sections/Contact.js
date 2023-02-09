import styled from "styled-components";
import { Device } from "../Devices";


const Contact = ({isDark}) => {
    return (
        <Wrapper isDark={isDark}>
            <div className="title">
                
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
        left: -30px;
        margin-top: 10px;
    }
`;

export default Contact;