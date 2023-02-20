import styled from "styled-components";
import { Device } from "../Devices";
import { useEffect, useState } from "react";

const ExpDisplay = ({selected}) => {
        const [display, setDisplay] = useState('')
        
        useEffect(() => {
            setDisplay('');
            if (selected == 'education'){
                setDisplay(<div class="timeline">
                    <div className="container left">
                    <div className="content">
                        <h2>07/2022 - 10/2022</h2>
                        <p className="description">Full-Stack Web Development Bootcamp at Concordia University</p>
                    </div>
                    </div>
                    <div className="container right">
                    <div className="content">
                        <h2>10/2020 - 04/2022</h2>
                        <p>AEC certificate in Web Development & Design at CDI College</p>
                    </div>
                    </div>
                    <div className="container right">
                    <div className="content">
                        <h2>08/2018 - 04/2020</h2>
                        <p>DEC in Computer Science & Technology 1.5 years completed at Dawson College</p>
                    </div>
                    </div>
                </div>)
            }
            else {
                setDisplay(<div class="timeline">
                    <div className="container left">
                    <div className="content">
                        <h2>12/2022 - Present</h2>
                        <p className="description">Co-chair & Choreographer for ICRF (Israel Cancer Research Fund)</p>
                    </div>
                    </div>
                    <div className="container right">
                    <div className="content">
                        <h2>02/2022 - 12/2022</h2>
                        <p>Freelance Content Editor & Graphic Design Support at Snack Owl Candy</p>
                    </div>
                    </div>
                    <div className="container right">
                    <div className="content">
                        <h2>07/2021 - 04/2022</h2>
                        <p>Shift Manager & Content Creator at Putting Edge</p>
                    </div>
                    </div>
                </div>)
            }
        },[selected])


        return (
            <Wrapper>
                <center>
                    {display}
                </center>
                
            </Wrapper>
        );
    }
    
    const Wrapper = styled.div`
        padding-top: 20px;
        /* The actual timeline (the vertical ruler) */
        .timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
        }

        /* The actual timeline (the vertical ruler) */
        .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: white;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
        }

        /* Container around content */
        .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
        }

        /* The circles on the timeline */
        .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
        }

        /* Place the container to the left */
        .left {
        left: 0;
        }

        /* Place the container to the right */
        .right {
        left: 50%;
        }

        /* Add arrows to the left container (pointing right) */
        .left::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
        }

        /* Add arrows to the right container (pointing left) */
        .right::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
        }

        /* Fix the circle for containers on the right side */
        .right::after {
        left: -16px;
        }

        /* The actual content */
        .content {
        padding: 20px 30px;
        background-color: white;
        position: relative;
        border-radius: 6px;
        }

        /* Media queries - Responsive timeline on screens less than 600px wide */
        @media screen and (max-width: 600px) {
        /* Place the timelime to the left */
        .timeline::after {
            left: 31px;
        }

        /* Full-width containers */
        .container {
            width: 100%;
            padding-left: 70px;
            padding-right: 25px;
        }

        /* Make sure that all arrows are pointing leftwards */
        .container::before {
            left: 60px;
            border: medium solid white;
            border-width: 10px 10px 10px 0;
            border-color: transparent white transparent transparent;
        }

        /* Make sure all circles are at the same spot */
        .left::after, .right::after {
            left: 15px;
        }

        /* Make all right containers behave like the left ones */
        .right {
            left: 0%;
        }
        }
    `;
    
    export default ExpDisplay;