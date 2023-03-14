import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import device from './Devices';
import '../index.css'
import { Link } from "react-router-dom";


library.add({faBars});

const DivLetterIconHeader = styled.div`        
    font-size: 2rem;
    font-weight: bold;
    float: left;
    margin-top: 0.7rem;
    margin-left: 1rem;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.7s;
    cursor: pointer;    
    &:hover{
        color: rgb(128, 204, 255);
    }        
`

const UlHeader = styled.div`    
    display: block;       
    float:right;
    @media ${device.tablet} { 
        display: flex;        
    }    
`

const LiHeader = styled.div`    
    margin-right: 0rem;
    margin-bottom:1rem;    
    margin-top:0rem;    
    @media ${device.tablet} { 
        margin-right: 1rem;       
    }    
`

const LinkPrimaryHeader = styled.a`    
    padding: 0.5rem;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.7s;
    float:right;
    cursor: pointer;
    &:hover{
        color: rgb(128, 204, 255);
    }       
    @media ${device.tablet} { 
        padding: 1rem;
    }    
`

const LinkSecondaryHeader = styled.a`        
    border-style: none;
    padding: 0.5rem;    
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.7s;
    float:right;
    cursor: pointer;
    &:hover{
        color: rgb(128, 204, 255);
        border-color: whitesmoke;    
    }    
    @media ${device.tablet} { 
        padding: 1rem;
        border-style: solid;
        border-color: rgb(128, 204, 255);    
    }    
`

const HambugerBtn = styled.button`    
    padding: 1rem;
    background-color:transparent;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.7s;    
    float:right;
    cursor: pointer;
    &:hover{
        color: rgb(128, 204, 255);
    }
    @media ${device.tablet} { 
        display: none;
    }    
`


const Header = () => {
 
    const [menuActive, setMenuActive] = useState(true);
 
    const handlerSetMenuActive = () =>{    
        menuActive ? setMenuActive(false) :setMenuActive(true);        
    }

    let widthMatch = window.matchMedia(device.tablet);
    
    // mm in the function arg is the matchMedia object, passed back into the function
    widthMatch.addEventListener('change', function(mm) {
        if (mm.matches) {
            setMenuActive(true);            
        }
        else {
            setMenuActive(false);            
        }
    });

    window.onscroll = function() {         
        var scrollY = window.pageYOffset || document.documentElement.scrollTop;
        var header = document.getElementById('headerPrincipalDiv');                
        if(scrollY <= this.lastScroll){
            header.classList.add('scrollShow');
            header.classList.remove('scrollHide');
        }else{
            header.classList.remove('scrollShow'); 
            header.classList.add('scrollHide');
        }

        this.lastScroll = scrollY ;
    }
    
  return (
    <div id='headerPrincipalDiv' className='divPrincipal'>
        <DivLetterIconHeader>
            F
        </DivLetterIconHeader>        
        <UlHeader>
                <LiHeader>
                    <HambugerBtn onClick={() => handlerSetMenuActive()}>
                        <FontAwesomeIcon icon={"fa-bars"}></FontAwesomeIcon>
                    </HambugerBtn>
                </LiHeader>
                {
                    menuActive &&
                    <>  
                        <LiHeader>
                            <Link to={`/`} className='linkHeader' >Init</Link>
                        </LiHeader>  
                        <LiHeader>
                            <Link to={`/About`} className='linkHeader' >About me</Link>
                        </LiHeader>
                        <LiHeader>
                            <Link to={`/Experience`} className='linkHeader' >Experience</Link>
                        </LiHeader>
                        <LiHeader>
                            <Link to={`/Work`} className='linkHeader' >Works</Link>
                        </LiHeader>
                        <LiHeader>
                            <Link to={`/Contact`} className='linkHeader' >Contact</Link>
                        </LiHeader>                        
                        <LiHeader>
                            <Link to={`/Experience`} className='linkHeader'>My CV</Link>
                        </LiHeader>
                    </>                
                }                    
            </UlHeader>
    </div>    
  )
}

export default Header