import styled from "styled-components";
import { Device } from "../Devices";
import { useState } from "react";
import PojectCards from "../components/ProjectCards";

const Projects = ({isDark}) => {
    const [filter, setFilter] = useState('all');
    return (
        <Wrapper isDark={isDark}>
            <div className="title">
                <p>Some things I've built</p>
            </div>
            <div className="category">
                <li className={filter=='all'? 'filter':''} onClick={() => setFilter('all')}> All </li>
                <li className={filter=='full'? 'filter':''} onClick={() => setFilter('full')}> FullStack </li>
                <li className={filter=='front'? 'filter':''} onClick={() => setFilter('front')}> Frontend </li>
                <li className={filter=='layout'? 'filter':''} onClick={() => setFilter('layout')}> Layouts </li>
                <li className={filter=='other'? 'filter':''} onClick={() => setFilter('other')}> Other </li>
            </div>
            <div className="cards">
                <PojectCards isDark={isDark} filter={filter}/>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    .title{
        float: right;
        background-color: ${({ isDark }) => isDark ? "#EBD9FE" : "#B428FF"};
        padding: 20px;
        width: 330px;
        font-size: 18px;
        color: ${({ isDark }) => isDark ? "#333" : "#fff"};
        padding-left: 30px;
        border-radius: 50px;
        position: relative;
        right: -50px;
        margin-top: 10px;
        top: -80px;
    }
    .category{
        position: relative;
        color: ${({ isDark }) => !isDark ? "#fff" : "#333"};
        width: 35%;
        left: -40px;
        padding-left: 50px;
        background-color: ${({ isDark }) => isDark ? "#EBD9FE" : "#B428FF"};
        border-radius: 40px;
        list-style: none;
    }
    .category li{
        position: relative;
        top: -30px;
        padding-bottom: 5px;
    }
`;

export default Projects;