import React from 'react'
import styled from 'styled-components'
import device from './Devices';

const PrincipalDiv = styled.div`        
    position: fixed;        
    left: 0;
    margin-bottom: 1%;
    bottom: 0;
    width: 100%;  
    color:  rgb(128, 204, 255);
    font-size:1rem;
    font-weight: 600;
    font-family:Arial, Helvetica, sans-serif;
    text-align: center;
    @media ${device.tablet} { 
      font-size:0.8rem;
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