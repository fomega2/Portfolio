import React from 'react'
import styled from 'styled-components'
import device from './Devices';

const PrincipalDiv = styled.div`
    display:block;
    width : 100%;
    margin-left : 0%;
    margin-right : 0%;
    margin-bottom: 10%;            
    @media ${device.mobileS} { 
        width : 50%;
        margin-left : 25%;
        margin-right : 25%;
        margin-top : 25%;
    }    
    @media ${device.mobileM} { 
        width : 50%;
        margin-left : 25%;
        margin-right : 25%;
        margin-top : 25%;
    }    
    @media ${device.mobileL} { 
        width : 50%;
        margin-left : 25%;
        margin-right : 25%;
        margin-top : 25%;
    }        
    @media ${device.tablet} { 
        width : 50%;
        margin-left : 25%;
        margin-right : 25%;
        margin-top : 25%;
    }    
    @media ${device.laptop} { 
        width : 50%;
        margin-left : 25%;
        margin-right : 25%;
        margin-top : 0%;
    }        
`

const TittleSection = styled.h4`    
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 1.5rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;    
    @media ${device.tablet} { 
        font-size: 2rem;
    }    
`
const SubTittle1Section = styled.p`
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 1rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    @media ${device.tablet} { 
        font-size: 1.5rem;
    }    
`

const ExperienceYears = styled.div`
    margin-bottom:4%;
    color:  whitesmoke;
    font-size: 0.8rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;    
    @media ${device.tablet} { 
        font-size: 1rem;
    }    
`

const CompanyName = styled.a`
    margin-bottom:1%;
    color:  whitesmoke;
    font-size: 1rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    cursor: pointer;
    transition: 0.6s;
    &:hover{
        color:  rgb(128, 204, 255);
        font-size:1.1rem;
    }
    @media ${device.tablet} { 
        font-size: 1.5rem;
        &:hover{
            color:  rgb(128, 204, 255);
            font-size:1.6rem;
        }
    }    
`

const UlTecnologiesList = styled.ul`
    width:80%;    
    @media ${device.tablet} { 
        width:70%;
        margin-left:15%;
        margin-right:15%;
    }
`

const LiTecnologiesList = styled.li`
    margin-top:0.8rem;
    color:whitesmoke;    
    text-size-adjust:inherit;
    font-size:0.9rem;
    font-family: Arial, Helvetica, sans-serif;
    text-align:justify;         
    @media ${device.tablet} { 
        font-size:1rem;
    }
`


const Experience = () => {
  return (
    <PrincipalDiv>
        <TittleSection>2. Experience</TittleSection>
        <SubTittle1Section>
            Software Develover at {" "}                          
            <CompanyName>
                Easy Managemment
            </CompanyName>
        </SubTittle1Section>
        <ExperienceYears>
            Mar 2021 - Present
        </ExperienceYears>
        <UlTecnologiesList>
            <LiTecnologiesList>
                Development of different software modules from Easy Management customers.
            </LiTecnologiesList>
            <LiTecnologiesList>
                Create new features to products from the company as an ERP, an or an Invoicing System.
            </LiTecnologiesList>
            <LiTecnologiesList>
                Requirements gathering and user stories.
            </LiTecnologiesList>
        </UlTecnologiesList>
    </PrincipalDiv>
  )
}

export default Experience