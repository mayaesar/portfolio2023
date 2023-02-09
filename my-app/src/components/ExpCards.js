import styled from "styled-components";
import { Device } from "../Devices";


const ExpCards = ({category}) => {

    switch(category){
        case 'skill':
            return(
                <Wrapper>
                    <div className="info">
                        <li className="skill">JavaScript ~2yrs</li>
                        <li className="skill">HTML & CSS ~ 3yrs</li>
                        <li className="skill">Java ~ 2yrs</li>
                        <li className="skill">React.js ~ 1yr</li>
                        <li className="skill">Node.js ~ 1yr</li>
                        <li className="skill">PHP ~ 1yr</li>
                    </div>
                </Wrapper>
            );
            case 'experience':
            return(
                <Wrapper>
                    <div className="info">
                        <p className="company">Rudsak</p>
                        <p className="position">3rd key & Sales Associate</p>
                        <p className="year"> 2022 - Present </p>
                    </div>
                    <div className="info">
                        <p className="company">Snack Owl Candy</p>
                        <p className="position">Freelance Content Editor & Graphic Design Support</p>
                        <p className="year"> 2022 - Present </p>
                    </div>
                    <div className="info">
                        <p className="company">Putting edge</p>
                        <p className="position">Shift Manager & Content Creator</p>
                        <p className="year"> 2021 - 2022 </p>
                    </div>
                    <div className="info">
                        <p className="company">Israel Cancer Research Fundraiser</p>
                        <p className="position">Co-Chair and Choreographer</p>
                        <p className="year"> 2022 - present</p>
                    </div>
                </Wrapper>
            );
            case 'freelance':
            return(
                <Wrapper>
                    <div className="info">
                        <p className="freelance"> - Created an informational website for a start-up company</p>
                        <p className="freelance"> - Created HTML5 banners for an ad agency</p>
                        <p className="freelance"> - Freelance Content Editor & Graphic Design Support</p>
                    </div>
                </Wrapper>
            );
            default:
            return(
                <Wrapper>
                    <div className="info">
                        <p className="program">Full-Stack Web Development Bootcamp</p>
                        <p className="school">Concordia University</p>
                        <p className="year">07/2022 - 10/2022</p>
                    </div>
                    <div className="info">
                        <p className="program">AEC certificate in Web Development & Design</p>
                        <p className="school">CDI College</p>
                        <p className="year">10/2020 - 04/2022</p>
                    </div>
                    <div className="info">
                        <p className="program">DEC in Computer Science & Technology <br/> 1.5 years completed</p>
                        <p className="school">Dawson College</p>
                        <p className="year">08/2018 - 04/2020</p>
                    </div>
                </Wrapper>
            );
    }
}

const Wrapper = styled.div`
    width: 80%;
    position: relative;
    top: -90px;
    left: -40px;
    background-color: #EBD9FE;
    border-radius: 40px;

    .info{
        width: 80%;
        color: #333;
        padding: 10px;
        margin-left: 45px;
        border-bottom: 1px solid #333;
    }
    .skill{
        list-style: circle;
        padding-bottom: 3px;
    }
    .freelance{
        font-size: 16px;
        padding-bottom: 5px;
    }
    .program, .company{
        font-size: 16px;
    }
    .school, .year, .position{
        font-size: 14px;
    }
`;



export default ExpCards;