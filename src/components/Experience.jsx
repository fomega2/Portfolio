import React from 'react'
import styled, { keyframes } from 'styled-components'
import device from './Devices';

const PrincipalDiv = styled.div`
    display:block;
    width : 100%;
    margin-left : 0%;
    margin-right : 0%;
    margin-bottom: 10%;            
    @media ${device.mobileS} { 
        width : 70%;
        margin-left : 10%;
        margin-right : 20%;
        margin-top : 25%;
    }    
    @media ${device.mobileM} { 
        width : 70%;
        margin-left : 10%;
        margin-right : 20%;
        margin-top : 25%;
    }    
    @media ${device.mobileL} { 
        width : 70%;
        margin-left : 10%;
        margin-right : 20%;
        margin-top : 25%;
    }        
    @media ${device.tablet} { 
        width : 80%;
        margin-left : 10%;
        margin-right : 10%;
        margin-top : 25%;
    }    
    @media ${device.laptop} { 
        width : 80%;
        margin-left : 10%;
        margin-right : 10%;
        margin-top : 10%;
    }        
`

const Transition = keyframes`
    0% { opacity: 0%}    
    100% { opacity: 100%}
`

const TittleSection = styled.h4`    
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 3rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;    
    animation-name:${Transition};
    animation-duration: 2s;
    animation-iteration-count: initial;    
    @media ${device.mobileS} {         
        font-size: 2.5rem;
    }    
    @media ${device.mobileM} {         
        font-size: 2.5rem;
    }    
    @media ${device.mobileL} {          
        font-size: 2.5rem;
    }    
    @media ${device.tablet} {            
        font-size: 3rem;
    }    
    @media ${device.laptop} {            
        font-size: 3rem;
    }    
    @media ${device.laptopL} {            
        font-size: 3rem;
    }    
`
const SubTittle1Section = styled.p`
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 1rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
    animation-name:${Transition};
    animation-duration: 2s;
    animation-iteration-count: initial;    
    @media ${device.tablet} { 
        font-size: 1.5rem;
    }    
`

const CompanyName = styled.a`
    margin-bottom:1%;
    color:  whitesmoke;
    font-size: 1.5rem;        
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    cursor: pointer;
    transition: 0.6s;
    &:hover{
        color:  rgb(128, 204, 255);        
    }    
`

const UlTecnologiesList = styled.ul`
    text-align:center;
    width:100%;        
    animation-name:${Transition};
    animation-duration: 2s;
    animation-iteration-count: initial;    
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

const TittleExp= styled.h2`
    color:  rgb(128, 204, 255);
    font-family: Arial, Helvetica, sans-serif;
    font-size:1.5rem;
    margin-left:1.5rem;
    animation-name:${Transition};
    animation-duration: 2s;
    animation-iteration-count: initial;    
`

const Separator= styled.span`
    color:  rgb(128, 204, 255);
    font-family: Arial, Helvetica, sans-serif;
    font-size:1.3rem;    
    display: contents;
    margin-bottom: 0%;
    @media ${device.mobileS} {
        display: flex;
        margin-bottom: 2%;
    }
    @media ${device.mobileM} {
        display: flex;
        margin-bottom: 2%;
    }
    @media ${device.mobileL} { 
        display: flex;
        margin-bottom: 2%;
    }
    @media ${device.tablet} { 
        display: contents;
        margin-bottom: 0%;
    }
`


const Experience = () => {
  return (
    <PrincipalDiv>
        <TittleSection>Experience</TittleSection>
        <SubTittle1Section>
            Software Develover at {" "}                          
            <CompanyName>
                Easy Managemment
            </CompanyName>
            {""} from Mar 2021 to present
        </SubTittle1Section>        
        <TittleExp>Technologies that I've used</TittleExp>
        <UlTecnologiesList>
            <LiTecnologiesList>
                <Separator> Backend: </Separator> 
                .Net 5 and 6,                
                .Net Framework,                
                C#.                
            </LiTecnologiesList>                        
            <LiTecnologiesList>
                <Separator> Frontend: </Separator> 
            React, Jquery, JS Vanilla, Angular 12, Bootstrap, Tailwind, CSS, HTML, MVC .Net.
            </LiTecnologiesList>                        
            <LiTecnologiesList>
                <Separator> Databases: </Separator> 
                Sql Server, MySql.
            </LiTecnologiesList>                        
        </UlTecnologiesList>
        <TittleExp>Functions</TittleExp>
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
            <LiTecnologiesList>
                Developvment of REST APIs with C# and .Net 5 and 6.
            </LiTecnologiesList>
            <LiTecnologiesList>
                Maintenance of applications of Company, in the desktop product, "Easy Standart", and his webforms app "ERP Easy Conta".
            </LiTecnologiesList>
            <LiTecnologiesList>
                Solve and fix bugs in the company apps.
            </LiTecnologiesList>
            <LiTecnologiesList>
                Publish app actualizations in IIS, and sometimes in Azure.
            </LiTecnologiesList>
            <LiTecnologiesList>
                Work as resource to other companies, in some projects.
            </LiTecnologiesList>
            <LiTecnologiesList>
                Supporting to the company apps, and customers issues.
            </LiTecnologiesList>
        </UlTecnologiesList>        
    </PrincipalDiv>
  )
}

export default Experience