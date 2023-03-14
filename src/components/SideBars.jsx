import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import device from './Devices';

library.add({faGithub, faLinkedin});

const SideBarL = styled.div`
    display:block;
    position: sticky;    
    color:  rgb(128, 204, 255);    
    transform-origin: bottom left;    
    top:50%;
    margin-left:0%;
    @media ${device.mobileS} { 
        display:none;
    }
    @media ${device.mobileM} { 
        display:none;
    }
    @media ${device.mobileL} { 
        display:none;
    }
    @media ${device.tablet} { 
        display:block;
    }    
`

const SideBarR = styled.div`
    display:block;
    position: sticky;    
    color:  rgb(128, 204, 255);        
    rotate:90deg;
    top:48%;
    margin-left: 95%;
    @media ${device.mobileS} { 
        display:none;
    }
    @media ${device.mobileM} { 
        display:none;
    }
    @media ${device.mobileL} { 
        display:none;
    }
    @media ${device.tablet} { 
        display:block;
    } 
    @media ${device.laptop} { 
        top:43%;
    } 
    @media ${device.laptopL} { 
        top:48%;
    } 
`

const LinkContainer = styled.div`
    width:fit-content;
    margin-left:0.8%;
    margin-bottom:2rem;
`

const ProyectLink = styled.a`    
    top:50%;
    color:  whitesmoke;
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;        
    margin-left:0%;    
    padding-left:0;    
    cursor: pointer;
    transition:0.7s;
    &:hover{
        color:  rgb(128, 204, 255);
    }
`

const ProyectLinkR = styled.a`    
    top:50%;
    color:  whitesmoke;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;        
    margin-left:0%;    
    padding-left:0;    
    cursor: pointer;
    transition:0.7s;
    &:hover{
        color:  rgb(128, 204, 255);
    }
`


const SideBars = () => {
  return (
    <>
        <SideBarL>               
            <LinkContainer>
                <ProyectLink>            
                    <FontAwesomeIcon icon={"fa-brands fa-github"} />
                </ProyectLink>
            </LinkContainer>        
            <LinkContainer>
                <ProyectLink>            
                    <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />
                </ProyectLink>
            </LinkContainer>        
        </SideBarL>
        <SideBarR>
            <LinkContainer>
                <ProyectLinkR>            
                    Fabcavi2@hotmail.com                    
                </ProyectLinkR>
            </LinkContainer>        
        </SideBarR>
    </>    
  )
}

export default SideBars