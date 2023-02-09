import styled from "styled-components";
import { Device } from "../Devices";
import { useEffect, useState } from "react";
import RestaurantImg from "../assets/covers/Screen Shot 2022-05-02 at 7.29.18 PM.png";
import KitchenImg from "../projectsFolder/kitchenDrawing/drawingthing.png";
import CorbusierImg from "../projectsFolder/leCorbusier/assignment1full.png";
import SchedulerProject from "../projectsFolder/schedulerProject/Screenshot 2022-11-17 at 2.04.28 PM.png";
import GarfieldGame from "../projectsFolder/garfieldGame/Screenshot 2022-11-17 at 1.56.00 PM.png";
import GroupProject from "../projectsFolder/eComGroup/Screen_Shot_2022-11-17_at_14.44.09.png";
import Modal from "./Modal";


const PojectCards = ({filter}) => {
const [displaying, setDisplaying] = useState(null);
const [show, setShow] = useState(false);
const [modal, setModal] = useState(null);

const projects = [
        // {img:null,
    //     title:null,
    //     category:null,
    //     description:null,
    //     modal:null,
    //     link:null,
    //     },
    {img:SchedulerProject,
        title:"Add me to your Schedule",
        category:"full",
        description:"This is a reverse scheduler where you add your free time to your calendar and connect with friends to make plans.",
        modal:null,
        link:"https://github.com/mayaesar/AddMeToYourSchedule",
        },
    {img:GroupProject,
        title:"E-commerce site",
        category:"full",
        description:"This was a group project at Concordia's bootcamp where we had to create an E-commerce site with the products we were given.",
        modal:null,
        link:"https://github.com/mayaesar/GroupProject-EcomSite",
        },
    {img:GarfieldGame,
        title:"Garfield Game (not modile friendly)",
        category:"front",
        description:"This was a project at Concordia's bootcamp where I created a game that involved the player to use their keyboard.",
        modal:null,
        link:"https://classy-smakager-3ffa68.netlify.app/",
        },
    {img: RestaurantImg,
        title:"Restaurant site",
        category:"front",
        description:"This was a class project at CDI College where I create a site with a minimum of 3 pages.",
        modal: null,
        link:"https://63a0b96481c68b1b3ed5dfb9--bright-halva-2198d9.netlify.app/",
        },
    {img: KitchenImg,
        title:"Kitchen Drawing",
        category:"other",
        description:"This was a project for Illustration 1 at CDI College where I re-created an image.",
        modal: KitchenImg,
        link:null,
        },
    {img:CorbusierImg,
        title:"Le Corsbusier",
        category:"layout",
        description:"This was a project for Layout Fundamental at CDI College where I re-created a site for Le Corbusier.",
        modal: CorbusierImg,
        link:null,
        },
    ]

    useEffect(() => {
        if(filter === "all"){
            setDisplaying(projects);
        }
        else{
            let tempArray = [];
            projects.map((project) => {
                if(project.category === filter){
                    tempArray.push(project)
                }
            })
            setDisplaying(tempArray);
        }
    }, [filter])
    return displaying?(
        <Wrapper>
            <Modal show={show} modal={modal} onClose={() => setShow(false)}/>
            {displaying.map((project) => {
                if(project.modal !== null){
                    return(
                        <Card onClick={() => {
                            setShow(true) 
                            setModal(project.modal)}}>
                            <img src={project.img}/>
                            <p className="projectName">{project.title}</p>
                            <p className="description">{project.description}</p>
                        </Card>
                    );
                }
                else{
                    return(
                        <a href={project.link} target="_blank">
                            <Card>
                                <img src={project.img}/>
                                <p className="projectName">{project.title}</p>
                                <p className="description">{project.description}</p>
                            </Card>
                        </a>
                        
                    );
                }
            })}
        </Wrapper>
    ):(
        <>
        </>
    );
}

const Wrapper = styled.div`
    position: relative;
    left: 110px;
    top: -150px;
    max-width: 60%;
    overflow-x: scroll;
    display: flex;
    gap: 5px;
    a{
        text-decoration: none;
    }
`;
const Card = styled.div`
    padding: 2px;
    width: 150px;
    img{
        margin: 5px;
        width: 140px;
        height: 90px;
        object-fit: cover;
    }
    .projectName{
        padding-top: -5px;
        font-size: 14px;
        text-align: left;
        color: #fff;
    }
    .description{
        font-size: 14px;
        text-align: left;
        display: none;
    }
`;

export default PojectCards;