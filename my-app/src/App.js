import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { Device } from "./Devices";
import Typing from "./components/Typing";
import { useState } from "react";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import headerVid from "./assets/headerVid.mp4";
import waveTop from "./assets/layeredWaves.svg";
import waveTwo from "./assets/wave.svg";
import waveThree from "./assets/waveBottom.svg";


const App = () => {
  return (
    <Wrapper>
      <GlobalStyles />
      <div className="vid">
        <video src={headerVid} type="video/mp4" autoPlay loop muted />
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
      <img id="wave4" src={waveTop}/>
      <Contact/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #333;
  width: 100%;
  overflow-x: hidden;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  max-height: 2650px;
  overflow-y: hidden;

  .vid video{
    width: 80vw;
    margin-left: 10vw;
  }
  .text1{
    margin: 20px;
    font-size: 28px;
    font-weight: 500;
    color: #fff;
  }
  .text2{
    margin: 20px;
    font-size: 28px;
    font-weight: 500;
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
  #wave4{
    position: relative;
    top: -500px;
    height: 300px;
    width: 100%;
    object-fit: cover;
  }
  @media ${Device.mobileL}{
    #wave3{
      height: 400px;
      top: -400px;
    }
  }
  @media ${Device.tablet}{
    max-height: 3750px;
    .text1, .text2{
      font-size: 45px;
    }
    #wave1{
      height: 500px;
      top: -200px;
    }
    #wave2{
      top: -550px;
      height: 400px;
    }
    #wave3{
      top: -565px;
      height: 400px;
    }
    #wave4{
      height: 500px;
      top: -630px;
    }
  }
  @media ${Device.laptop}{
    max-height: 3850px;
    .text1, .text2{
      font-size: 60px;
      padding-bottom: 20px;
    }
    #wave2{
      top: -600px;
      height: 400px;
    }
    #wave3{
      top: -615px;
      height: 600px;
    }
    #wave4{
      height: 500px;
      top: -670px;
    }
  }
  @media ${Device.desktop}{
    max-height: 4100px;
    padding-top: 30px;
    .vid video{
      width: 40%;
      margin-left: 30%;
    }
    #wave1{
      height: 600px;
    }
    #wave2{
      top: -700px;
      height: 500px;
    }
    #wave3{
      top: -715px;
      height: 600px;
    }
    #wave4{
      height: 700px;
      top: -1200px;
    }
  }
`;

export default App;
