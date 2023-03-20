import React from 'react'
import styled  from 'styled-components'
import { keyframes } from 'styled-components'
import device from './Devices';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faAddressBook, faProjectDiagram, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

library.add({faBriefcase, faAddressBook, faProjectDiagram, faUser});

const DivPrincipalPresentation = styled.div`
    display: block;        
    text-align:center;
    width: 100%;    
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
        margin-top: 10%;         
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

const TextAnimation = keyframes`
 0% { background-position : -500%; color:  black}
 50% { background-position : 500%; color:  rgb(128, 204, 255) }
 100% { background-position : 500%; color:  black}
`


const FirstTittle = styled.div`
    position:relative;
    color:  rgb(128, 204, 255);
    font-family: 'Courier New', Courier, monospace;
    font-size: 3rem;
    font-weight: bold;
    margin-bottom:3rem;    
    animation-name:${TextAnimation};
    animation-duration: 2s;
    animation-iteration-count: infinite;    
    @media ${device.mobileS} {
        margin-bottom:2rem;     
        font-size: 1.5rem;
    }
    @media ${device.mobileM} {
        margin-bottom:2rem;     
        font-size: 1.5rem;
    }
    @media ${device.mobileL} { 
        margin-bottom:2rem;    
        font-size: 2rem;
    }
    @media ${device.tablet} { 
        margin-bottom:3rem;    
        font-size: 3rem;
    }
`

const SecondTittle = styled.h3`
    margin: 0;
    color:  whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;            
    @media ${device.mobileS} {
        margin-bottom:2rem;     
        font-size: 2rem;
    }
    @media ${device.mobileM} {
        margin-bottom:2rem;     
        font-size: 2rem;
    }
    @media ${device.mobileL} {                  
        font-size: 2rem;
    }
    @media ${device.tablet} {         
        font-size: 3rem;
    }      
`
const Paragraph = styled.h4`        
    position: relative;
    margin-top: 1rem;
    width:80%;
    margin-left:10%;
    margin-right:10%;
    color:  whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;        
    text-align: center;            
    @media ${device.mobileS} {
        margin-bottom:2rem;     
        font-size: 1rem;
    }
    @media ${device.mobileM} {
        margin-bottom:2rem;     
        font-size: 1rem;
    }
    @media ${device.mobileL} {                  
        font-size: 2rem;
    }
    @media ${device.tablet} {         
        width:80%;
        margin-left:10%;
        margin-right:10%;
    }      
`
const LinkInd = styled.a`        
    color:  white;
    text-decoration:none;
    cursor: pointer;    
    transition: 0.6s;
    z-index:1;
    &:hover{
        color:  rgb(128, 204, 255);
    }
`

const Arrows = styled.span`        
    color:  rgb(128, 204, 255);    
`

const Presentation = () => {
  return (
    <DivPrincipalPresentation>
        <DivBlockPresentation>
            <FirstTittle>Welcome to my portfolio!</FirstTittle>
            <SecondTittle>My name is Fabián!</SecondTittle>        
            <SecondTittle>I build things for the web!</SecondTittle>        
            <Paragraph>I'm Full Stack Developer from Costa Rica, I love the web development and I open to new challenges. </Paragraph>                    
            <Paragraph>You can know more about me, in my 
                <Arrows> - </Arrows>
                    <LinkInd href='https://www.linkedin.com/in/fabian-calderon-dev/' target={"_blank"}>LinkedIn</LinkInd> 
                <Arrows> - </Arrows>
            </Paragraph>                    
        </DivBlockPresentation>
        <DivFlexPresentation>                
        <Link to={`Experience`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-briefcase" title='Experience'/>                        
        </Link>            
        <Link to={`Work`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-project-diagram" title='Proyects' />                        
        </Link>                    
        <Link to={`Contact`} className="txtRouter">
            <FontAwesomeIcon className='iconRouter' icon="fas fa-address-book" title='Contact Information' />                        
        </Link>                            
            
        </DivFlexPresentation>
    </DivPrincipalPresentation>
  )
}

export default Presentation