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
import waveTop from "./assets/layeredWaves.svg";
import waveTwo from "./assets/wave.svg";
import waveThree from "./assets/waveBottom.svg";


const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="image">
        <img src={headerImg}/>
      </div>
      <div className="text1">
        <Typing text={"Hey, I'm Maya Esar"}/>
      </div>
      <div className="text2">
        <Typing text={"I'm a Full Stack Web Developer"}/>
      </div>
      <img id="wave1" src={waveTop}/>
      <About/>
      <img id="wave2" src={waveTwo}/>
      <Experience/>
      <img id="wave3" src={waveThree}/>
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
  .text1{
    padding-top: 10px;
    margin: 20px;
    font-size: 24px;
    color: #fff;
  }
  .text2{
    margin: 20px;
    font-size: 24px;
    color: #fff;
    text-align: right;
    height: 50px;
  }
  #wave1{
    position: relative;
    top: -150px;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  #wave2{
    position: relative;
    top: -350px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
  #wave3{
    position: relative;
    top: -370px;
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

export default App;
