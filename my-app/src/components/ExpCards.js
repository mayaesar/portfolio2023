import styled from "styled-components";
import { Device } from "../Devices";


const ExpCards = ({category}) => {
    
    switch(category){
        case 'skill':
            return(
                <div>
                    skill
                </div>
            );
            case 'experience':
            return(
                <div>
                    experience
                </div>
            );
            case 'freelance':
            return(
                <div>
                    freelance
                </div>
            );
            default:
            return(
                <div>
                    education
                </div>
            );
    }
}


export default ExpCards;