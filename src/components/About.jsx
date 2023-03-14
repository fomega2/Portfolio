import React from 'react'
import styled from 'styled-components'
import device from './Devices';

const PrincipalDiv = styled.div`
    display:block;
    width : 80%;
    margin-left : 10%;
    margin-right : 10%;
    margin-bottom: 10%;    
    margin-top: 0%;    
    @media ${device.mobileS} { 
        margin-left : 20%;
        margin-right : 20%;
        width : 60%;
        margin-bottom: 20%;    
        margin-top: 25%;    
    }
    @media ${device.mobileM} { 
        margin-left : 20%;
        margin-right : 20%;
        width : 60%;
        margin-bottom: 20%;    
        margin-top: 25%;    
    }
    @media ${device.mobileL} { 
        margin-left : 20%;
        margin-right : 20%;
        width : 60%;
        margin-bottom: 20%;    
        margin-top: 25%;    
    }
    @media ${device.tablet} { 
        margin-left : 10%;
        margin-right : 10%;
        width : 80%;
        margin-bottom: 10%;    
        margin-top: 2%;    
    }
    @media ${device.laptop} { 
        margin-left : 10;
        margin-right : 10%;
        width : 80%;
        margin-bottom: 10%;    
        margin-top: 0%;    
    } 
`

const TittleSection = styled.h4`
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 1.5rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    @media ${device.tablet} {         
        font-size: 2rem;        
    }    
`

const ContainerDiv = styled.div`
    display:block;    
    @media ${device.mobileL} { 
        display: flex;        
    }    
    @media ${device.tablet} { 
        display: block;        
    }
    @media ${device.laptop} { 
        display: flex;                
    }    
`

const AboutText = styled.div`
    width:100%;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;    
    text-align: justify;
    font-size: 0.8rem;
    @media ${device.mobileL} { 
        width:100%;
        font-size: 0.8rem;        
    }    
    @media ${device.tablet} { 
        width:100%;
        font-size: 1rem;        
    }    
    @media ${device.laptop} { 
        width:50%;
        font-size: 1.3rem;
    }    
`

const ProfileImg = styled.img`
    margin-left: 15%;
    border-radius:0.5rem;
    border-style:solid;
    opacity:70%;
    transition: 0.6s;
    &:hover{
        opacity:100%
    }
    @media ${device.mobileS} { 
        margin-left: 5%;
        width:90%;
    } 
    @media ${device.mobileM} { 
        margin-left: 5%;
        width:90%;
    } 
    @media ${device.mobileL} { 
        margin-left: 5%;
        width:90%;
    } 
    @media ${device.tablet} { 
        margin-left: 25%;
        width:auto;
    }      
    @media ${device.laptop} {         
        width:auto;
        height:100%;
    }      
`
const DivTecnologiesList = styled.div`
    width:50%;
    display:flex;
`
const UlTecnologiesList = styled.ul`
    
`
const LiTecnologiesList = styled.li`
    color:whitesmoke;
`

const About = () => {
  return (
    <PrincipalDiv>
        <TittleSection>1. About Me</TittleSection>
        <ContainerDiv>            
            <AboutText>
                My name is Fabián. I'm a software developer from San José, Costa Rica.
                <br></br><br></br>
                During my experience a worked with tecnolgies such C#, dot Net, Javascript, React, Angular, Jquey, Sql Server, Mysql and others tools, that I used to solve the diferente issues from the daily rutine.
                When I worked in a new feature I always think in the user experience, and try to development a nice product to my company and custumers.
                <br></br><br></br>
                You can read more about me on my LinkedIn page, or Check my Github for some cool things.
                <br></br><br></br>
                Here are a few technologies I’ve been working with recently:
                <DivTecnologiesList>
                <UlTecnologiesList>
                    <LiTecnologiesList> C#</LiTecnologiesList>
                    <LiTecnologiesList> Dot Net</LiTecnologiesList>
                    <LiTecnologiesList> Javascript</LiTecnologiesList>
                </UlTecnologiesList>
                <UlTecnologiesList>
                    <LiTecnologiesList> C#</LiTecnologiesList>
                    <LiTecnologiesList> Dot Net</LiTecnologiesList>
                    <LiTecnologiesList> Javascript</LiTecnologiesList>
                </UlTecnologiesList>
            </DivTecnologiesList>
            </AboutText>            
            <ProfileImg src={'src/images/profileImg.jpg'}></ProfileImg>            
        </ContainerDiv>        
        
    </PrincipalDiv>
  )
}

export default About