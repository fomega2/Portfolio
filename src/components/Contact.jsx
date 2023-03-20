import React from 'react'
import styled from 'styled-components'
import device from './Devices';

const PrincipalDiv = styled.div`
    display:block;
    width : 70%;
    margin-left : 15%;
    margin-right : 15%;        
    margin-bottom: 10%;    
    margin-top: 10%;    
    @media ${device.mobileM} { 
        width : 100%;
        margin-left : 0%;
        margin-right : 0%;                
        margin-bottom: 20%; 
    }    
    @media ${device.tablet} { 
        width : 70%;
        margin-left : 15%;
        margin-right : 15%;        
        margin-bottom: 10%;                   
    }
`

const TittleSection = styled.h4`    
    color:  rgb(128, 204, 255);
    font-size: 2rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
    @media ${device.mobileM} { 
        font-size: 1.5rem;
    }    
    @media ${device.tablet} { 
        font-size: 2rem;
    }
`

const SubTittleSection = styled.h5`
    margin-top:0%;
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 2.4rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
    @media ${device.mobileM} { 
        font-size: 1.8rem;
    }
    @media ${device.mobileL} { 
        font-size: 1.8rem;
    }
    @media ${device.tablet} { 
        font-size: 2.4rem;
    }
`

const TextSection = styled.p`
    margin-bottom:2.5%;
    color:  whitesmoke;
    font-size: 1.5rem;
    font-weight:600;
    font-family: Arial, Helvetica, sans-serif;
    text-align:center;
    @media ${device.mobileM} { 
        font-size: 1rem;
    }
    @media ${device.mobileM} { 
        font-size: 1rem;
    }
    @media ${device.tablet} { 
        font-size: 1.5rem;
    }
`

const BtnContainer1 = styled.div`    
    text-align:center;
`

const SendMsgBtn = styled.a`    
    padding: 1rem;
    margin-top: 1rem;    
    background-color: transparent;
    border-style: solid;
    border-color: rgb(128, 204, 255);
    color: rgb(128, 204, 255);
    font-weight:bold;
    font-family:Arial, Helvetica, sans-serif;
    text-decoration:none;
    cursor: pointer;
    transition:0.7s;    
    &:hover{
        border-color:whitesmoke;
        color:whitesmoke;
    }
    @media ${device.mobileM} { 
        display:block;
    }
    @media ${device.mobileM} { 
        display:block;
    }
    @media ${device.tablet} { 
        display:inline;
    }
`

const Contact = () => {
  return (
    <PrincipalDiv>
        <TittleSection>3. Contact</TittleSection>
        <SubTittleSection>Get In Touch</SubTittleSection>
        <TextSection>
            Although I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </TextSection>
        <BtnContainer1>
            <SendMsgBtn href='mailto:fcalderon@gmail.com?subject=DM&body= ¡HELLO! '>Send a MSG!</SendMsgBtn>
        </BtnContainer1>        
    </PrincipalDiv>
  )
}

export default Contact