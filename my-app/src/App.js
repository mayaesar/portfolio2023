import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Device } from "./Devices";
import Typing from "./components/Typing";
import { useState } from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  const [isDark, setDarkMode] = useState(false);
  return (
    <Wrapper isDark={isDark}>
      <GlobalStyles />
      <div className="image">

      </div>
      <div className="text">
        <Typing text={"Maya Esar"}/>
        <Typing text={"Full Stack Web Developer"}/>
      </div>
      <center>
        <label className="switch">
        <input type="checkbox" checked={isDark} onChange={() => setDarkMode(!isDark)} />
        <span className="slider round"></span>
      </label>
      </center>
      <About isDark={isDark}/>
      <Experience isDark={isDark}/>
      <Projects isDark={isDark}/>
      <Contact isDark={isDark}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${({ isDark }) => isDark ? "#333" : "#F3ECEF"};
  padding-top: 40px;
  width: 100%;
  overflow-x: hidden;
  .image{
    border: 1px solid black;
    height: 200px;
    width: 200px;
    margin: auto;
  }
  .text{
    padding-top: 20px;
    font-size: 24px;
    text-align: center;
    color: ${({ isDark }) => isDark ? "#fff" : "#333"};
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
  
  input:focus + .slider {
    box-shadow: 0 0 1px #2196F3;
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
