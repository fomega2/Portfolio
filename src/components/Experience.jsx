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
        margin-top : 10%;
    }        
`

const TittleSection = styled.h4`    
    margin-bottom:1%;
    color:  rgb(128, 204, 255);
    font-size: 3rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;    
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
`

const Separator= styled.span`
    color:  rgb(128, 204, 255);
    font-family: Arial, Helvetica, sans-serif;
    font-size:1.3rem;    
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
        <TittleExp>Stack</TittleExp>
        <UlTecnologiesList>
            <LiTecnologiesList>
                <Separator> Backend </Separator> 
                .Net 5 and 6
                <Separator> - </Separator> 
                .Net Framework 
                <Separator> - </Separator>                 
                C#.                
            </LiTecnologiesList>                        
            <LiTecnologiesList>
                <Separator> Frontend </Separator> 
                React
                <Separator> - </Separator> 
                Jquery
                <Separator> - </Separator>                 
                JS Vanilla
                <Separator> - </Separator>                 
                Angular 12
                <Separator> - </Separator>                 
                Bootstrap
                <Separator> - </Separator>                 
                Tailwind
                <Separator> - </Separator>                 
                CSS
                <Separator> - </Separator>                 
                HTML                
                <Separator> - </Separator>                 
                MVC .Net.
            </LiTecnologiesList>                        
            <LiTecnologiesList>
                <Separator> Databases </Separator> 
                Sql Server
                <Separator> - </Separator> 
                MySql.
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
        </UlTecnologiesList>

        <TittleExp>Proyect DGAC</TittleExp>
        <UlTecnologiesList>
            <LiTecnologiesList>            
            System to manage the invoice and billing from flight operations. I develop many reports and modules such a Invoice, Billing, ATFM, Estadistics modules,
            and important features, for example the develop of functions that transform the radar flights data and transform that in item to invoice in the client.
            </LiTecnologiesList>
            <LiTecnologiesList>            
            In this proyect I've working such a Full Stack Developer and Analyst, and I used .net 5, Rest API, EntityFramework, UnitOfWork Repository with Sql Server, and to Front I used Jquery, and MVC .Net.
            </LiTecnologiesList>            
        </UlTecnologiesList>

        <TittleExp>Line Gestion</TittleExp>
        <UlTecnologiesList>
            <LiTecnologiesList>            
            I worked y some user stories to "Poder Judicial de Costa Rica", in this proyect I worked also as a Full Stack Developer. A create a new view to the "fee calculate",
            and realice many modifications in the dating module.
            </LiTecnologiesList>
            <LiTecnologiesList>            
            I worked .net famework, Rest API with Store Procedures, and in the Cliente I worked with Angular 9.
            </LiTecnologiesList>            
        </UlTecnologiesList>

    </PrincipalDiv>
  )
}

export default Experience