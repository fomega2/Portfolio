import React from 'react'
import styled from 'styled-components'
import device from './Devices';

const PrincipalDiv = styled.div`        
    position: fixed;        
    left: 0;    
    padding-bottom:1rem;    
    bottom: -1px;
    width: 100%;  
    background-color:black;
    color:  rgb(128, 204, 255);
    font-size:1rem;
    font-weight: 600;
    font-family:Arial, Helvetica, sans-serif;
    text-align: center;       
    @media ${device.mobileS} { 
        font-size:0.6rem;        
    }   
    @media ${device.mobileM} { 
        font-size:0.7rem;        
    }   
    @media ${device.mobileL} { 
        font-size:0.8rem;        
    }   
    @media ${device.tablet} { 
        font-size:1rem;        
    }   
`
const Footer = () => {
  return (
      <PrincipalDiv>
        Designed & build by Fabián Calderón Vindas - {new Date().getFullYear()}
      </PrincipalDiv>
  )
}

export default Footer