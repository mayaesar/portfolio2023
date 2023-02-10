import styled from "styled-components";
import { Device } from "../Devices";
import { useEffect, useState } from "react";

const ExpDisplay = ({selected}) => {
        const [display, setDisplay] = useState('')
        
        useEffect(() => {
            setDisplay('');
            if (selected == 'education'){
                setDisplay(<p>hello</p>)
            }
            else {

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

    `;
    
    export default ExpDisplay;