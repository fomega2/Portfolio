import React, { useState } from 'react'
import styled from 'styled-components'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import device from './Devices';
import { ProyectsInfoConstant } from '../Utils/ProyectsInfoConstant';


library.add({faGithub, faExternalLink});

const PrincipalDiv = styled.div`
    display:block;
    width : 100%;
    margin-left : 0%;
    margin-right : 0%;        
    margin-bottom: 10%;
    @media ${device.tablet} { 
        width : 70%;
        margin-left : 15%;
        margin-right : 15%;
    } 
`

const TittleSection = styled.h4`    
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
    display:block;
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

const BackButton = styled.button`
    background-color: transparent;
    color:whitesmoke;
    border-style: solid;
    border-color: rgb(128, 204, 255);
    border-width:0.1rem;
    padding:1rem 1.5rem 1rem 1.5rem;
    font-size: 1rem;
`
const ImageDiv = styled.div`
    width: 100%;   
    display:flex;
    margin-top:2rem;
    justify-content:center;
`

const Image = styled.img`
    width:800px;
    height:430px;
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

    console.log(imageObj.ImageRoute)

  return (
    <PrincipalDiv>
        <ContainerDiv>
            <TittleSection>Work - {imageObj.Name}</TittleSection>
        </ContainerDiv>
        <ContainerDiv>
            <ImageDiv>                
                <Image src={imageObj.ImageRoute}></Image> 
            </ImageDiv>
        </ContainerDiv>
        <ContainerDiv>
            <ButtonDivs>
                <BackButton onClick={handleSimplePaginationBack}>Back</BackButton>
                <BackButton onClick={handleSimplePaginationNext}>Next</BackButton>
            </ButtonDivs>            
        </ContainerDiv>        
    </PrincipalDiv>
        
  )
}

export default Work