import React from 'react'
import styled from 'styled-components'
import device from './Devices';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faAddressBook, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add({faBriefcase, faAddressBook, faProjectDiagram});

const DivPrincipalPresentation = styled.div`
    display: block;        
    text-align:center;
    width: 80%;
    margin-left: 10%;
    margin-left: 10%;             
    color: whitesmoke;         
    @media ${device.mobileS} {         
        margin-top: 20%;         
        margin-bottom: 10%;         
    }    
    @media ${device.mobileM} {         
        margin-top: 20%;         
        margin-bottom: 10%;         
    }    
    @media ${device.mobileL} {          
        margin-top: 20%;         
        margin-bottom: 10%;         
    }    
    @media ${device.tablet} {            
        margin-top: 0%;         
        margin-bottom: 10%;         
    }    
    @media ${device.laptop} {            
        margin-top: 0%;         
        margin-bottom: 5;         
    }    
    @media ${device.laptopL} {            
        margin-top: 0%;         
        margin-bottom: 5%;         
    }    
`

const DivBlockPresentation = styled.div`    
    display: block;    
`

const DivFlexPresentation = styled.div`    
    display: flex;    
    justify-content: space-between;
    margin-top: 5%;
    margin-right: 5%;
    margin-left: 5%;
    @media ${device.mobileS} {         
        display: block;    
    }    
    @media ${device.mobileM} {         
        display: block;    
    }    
    @media ${device.mobileL} {         
        display: block;    
    }    
    @media ${device.tablet} {                 
        display: flex;    
    }    
`

const FirstTittle = styled.div`
    color:  rgb(128, 204, 255);
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 2rem;
    margin-bottom:1rem;    
`

const SecondTittle = styled.h3`
    margin: 0;
    color:  whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;        
    @media ${device.tablet} { 
        font-size: 3rem;        
    }    
`
const Paragraph = styled.h4`        
    margin-top: 1rem;
    width:80%;
    margin-left:10%;
    margin-right:10%;
    color:  whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;        
    text-align: center;    
`

const SendMsgBtn = styled.button`
    padding: 1rem;
    margin-top: 1rem;
    background-color: transparent;
    border-style: solid;
    border-color: rgb(128, 204, 255);
    color: whitesmoke;
    font-weight:bold;
    font-family:Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition:0.7s;
    &:hover{
        border-color:whitesmoke;
        color:rgb(128, 204, 255);
    }
`

const Presentation = () => {
  return (
    <DivPrincipalPresentation>
        <DivBlockPresentation>
            <FirstTittle>Hello my name is: </FirstTittle>
            <SecondTittle>Fabián Calderón. </SecondTittle>        
            <SecondTittle>I build things for the web. </SecondTittle>        
            <Paragraph>I'm a web developer, I really like web development, and I want to keep growing. For me, learning is my main motivation to continue venturing into the world of programming.</Paragraph>                    
        </DivBlockPresentation>
        <DivFlexPresentation>        
        <Link to={`About`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-briefcase" />            
            Experience
        </Link>            
        <Link to={`About`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-project-diagram" />            
            Works
        </Link>                    
        <Link to={`About`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-address-book" />            
            About
        </Link>                            
        <Link to={`About`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-address-book" />            
            About
        </Link>                                    
        </DivFlexPresentation>
    </DivPrincipalPresentation>
  )
}

export default Presentation