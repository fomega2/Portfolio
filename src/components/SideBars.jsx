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
    @media ${device.laptop} {            
        display:block;
    }    
    @media ${device.laptopL} {            
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
        display:block;
    }    
    @media ${device.laptopL} {            
        display:block;
    }    
`

const LinkContainer = styled.div`
    display:flex;
    flex-direction: column; 
    width:10%;
    gap:1em;
    margin-left:0.8%;
    margin-bottom:2rem;
    color:  whitesmoke;
    &:hover{
        color:  rgb(128, 204, 255);
    }
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
                <ProyectLink href='https://github.com/fomega2' target={"_blank"}>            
                    <FontAwesomeIcon icon={"fa-brands fa-github"} />
                </ProyectLink>
                <ProyectLink href='https://www.linkedin.com/in/fabian-calderon-dev/'>            
                    <FontAwesomeIcon icon={"fa-brands fa-linkedin"} />
                </ProyectLink>
            </LinkContainer>                          
        </SideBarL>
        <SideBarR>
            <LinkContainer>
                <ProyectLinkR href='mailto:fcalderon@gmail.com?subject=DM&body= ¡HELLO! '>            
                    Fabcavi2@hotmail.com                    
                </ProyectLinkR>
            </LinkContainer>        
        </SideBarR>
    </>    
  )
}

export default SideBars