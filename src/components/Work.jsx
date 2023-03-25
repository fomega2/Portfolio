import React, { useState } from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import device from './Devices';
import { ProyectsInfoConstant } from '../Utils/ProyectsInfoConstant';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add({faGithub, faExternalLink});


const Transition = keyframes`
    0% { opacity: 0%}    
    100% { opacity: 100%}
`

const ImgTransition = keyframes`
    0% { opacity: 0%}    
    100% { opacity: 50%}
`

const PrincipalDiv = styled.div`
    display:block;
    width : 100%;
    margin-left : 0%;
    margin-right : 0%;        
    margin-bottom: 10%;
    animation-name:${Transition};
    animation-duration: 2s;
    animation-iteration-count: initial;    
    @media ${device.mobileS} { 
        width:100%;
        margin-top: 30%;
    } 
    @media ${device.mobileM} { 
        width:100%;
        margin-top: 30%;
    } 
    @media ${device.mobileL} {         
        width:100%;
        margin-top: 30%;
    } 
    @media ${device.tablet} { 
        width : 70%;
        margin-left : 15%;
        margin-right : 15%;
        margin-top: 0%;
    }      
    @media ${device.laptop} {         
        width : 70%;
        margin-left : 15%;
        margin-right : 15%;
        margin-top: 0%;
    }          
`

const TittleSection = styled.h4`    
    display:flex;        
    text-align:center;
    color:  rgb(128, 204, 255);
    font-size: 1.5rem;
    font-weight:bold;
    font-family: Arial, Helvetica, sans-serif;
    @media ${device.tablet} {         
        font-size: 2rem;
    }    
`

const ContainerDiv = styled.div`    
    display:flex;
    flex-direction: row;
    justify-content:center;
    margin: -1%;
    width : 100%;
    margin-left : 0%;
    margin-right : 0%;        
    margin-top: 2%;    
    margin-bottom: 2%;    
`

const ButtonDivs = styled.div`
    width: 100%;   
    display:flex;
    justify-content:space-around;
`

const PaginatioButton = styled.button`
    background-color: transparent;
    color: rgb(128, 204, 255);
    border-style: solid;
    border-color: rgb(128, 204, 255);
    border-width:0.1rem;
    padding:1rem 1.5rem 1rem 1.5rem;
    font-size: 1rem;
    transition: 0.6s;
    cursor: pointer;
    &:hover{
        color:whitesmoke;
        border-color: whitesmoke;
    }
`

const ImageDiv = styled.div`
    position:relative;
    width: 100%;   
    display:flex;    
    justify-content:center;
`

const Image = styled.img`
    width:800px;
    height:430px;
    opacity:50%;
    transition: 0.6s;
    &:hover{
        opacity:100%;
    }
    animation-name:${ImgTransition};
    animation-duration: 2s;
    animation-iteration-count: unset;    
    @media ${device.mobileS} { 
        width:350px;
        height:200px;
    } 
    @media ${device.mobileM} { 
        width:370px;
        height:220px;
    } 
    @media ${device.mobileL} {         
        width:370px;
        height:220px;
    } 
    @media ${device.tablet} { 
        width:800px;
        height:430px;
    }      
    @media ${device.laptop} {         
        width:800px;
        height:430px;
    }          
`

const ImageInformation = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    text-align: center;
    padding-top: 10%; 
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    visibility: none; opacity: 0;
    transition: opacity 0.3s;
    &:hover{
        visibility: visible; opacity: 1;
    }
`

const ProyectLink = styled.button`
    cursor: pointer;
    display:flex;    
    margin:0;    
    border:none;
    width: 10%;
    font-size:0.1rem;    
    font-family: Arial, Helvetica, sans-serif;                
    background-color: black;
    color: rgb(128, 204, 255);
    &:hover{
        color: white;    
    }
    @media ${device.mobileS} { 
        width: 20%;
    }   
    @media ${device.mobileM} { 
        width: 20%;
    }   
    @media ${device.mobileL} { 
        width: 20%;
    }   
    @media ${device.tablet} { 
        width: 10%;
    }   
`

const Work = () => {
    const imagesInfo = ProyectsInfoConstant;    
    const imagesMax = imagesInfo.length - 1;
    const [imageObj, setImageObj] = useState(imagesInfo[0]);
    const [position, setPosition] = useState(0);

    const handleSimplePaginationBack = () =>{                   
        if(position - 1 >= 0){
            setPosition(position - 1)
            setImageObj(imagesInfo[position - 1])
        }else{
            setPosition(imagesMax)
            setImageObj(imagesInfo[imagesMax])
        } 
    }

    const handleSimplePaginationNext = () =>{
        if(position + 1 <= imagesMax){
            setPosition(position + 1)
            setImageObj(imagesInfo[position + 1])
        }else{
            setPosition(0)
            setImageObj(imagesInfo[0])
        }
    }    

    const handleProyectRedirect = () =>{
        window.open(imageObj.Link, '_blank');
    }    

    console.log(imageObj.ImageRoute)

  return (
    <PrincipalDiv>
        <ContainerDiv>
            <TittleSection>Work - {imageObj.Name}                 
            </TittleSection>
            {
                imageObj.Link.length > 0 &&  
                <ProyectLink onClick={handleProyectRedirect}>
                 <FontAwesomeIcon className='iconRouter' icon="fas fa-external-link" />            
                </ProyectLink>
            }            
        </ContainerDiv>
        <ContainerDiv>
            <ImageDiv>                
                <Image src={imageObj.ImageRoute}></Image> 
                <ImageInformation>
                    <p>Description: {imageObj.Description}</p>
                    <p>Stack: {imageObj.Stack}</p>
                </ImageInformation>
            </ImageDiv>
        </ContainerDiv>
        <ContainerDiv>
            <ButtonDivs>
                <PaginatioButton onClick={handleSimplePaginationBack}>Back</PaginatioButton>
                <PaginatioButton onClick={handleSimplePaginationNext}>Next</PaginatioButton>
            </ButtonDivs>            
        </ContainerDiv>        
    </PrincipalDiv>
        
  )
}

export default Work