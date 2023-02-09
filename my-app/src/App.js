import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Device } from "./Devices";
import Typing from "./components/Typing";
import { useState } from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import headerImg from "./assets/topImg.svg";

const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="image">
        <img src={headerImg}/>
      </div>
      <div className="text">
        <Typing text={"Maya Esar"}/>
        <br/>
        <Typing text={"Full Stack Web Developer"}/>
      </div>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #333;
  width: 100%;
  overflow-x: hidden;
  .image img{
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  .text{
    padding-top: 20px;
    font-size: 24px;
    text-align: center;
    color: #fff;
  }


  // CSS for the toggle at the top ***
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
    margin: 20px;
  }
  
  .switch input { 
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  
  input:checked + .slider {
    background-color: var(--dark-secondary-color);
  }
  
  
  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  
  .slider.round {
    border-radius: 34px;
  }
  
  .slider.round:before {
    border-radius: 50%;
  }
`;

export default App;
