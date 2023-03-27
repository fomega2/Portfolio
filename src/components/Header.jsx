import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import device from './Devices';
import '../index.css'
import FabianCV from "../media/FabianCV.pdf"
import { Link } from "react-router-dom";

library.add({faBars});

const UlHeader = styled.div`    
    display: block;            
    margin-right:2em;    
    @media ${device.mobileS} { 
        display: flex;        
        flex-direction:column;
        width:100%;
        background-color: black;
        float:right;
        display: flex;       
        margin-right:0em;     
    }   
    @media ${device.mobileM} { 
        display: flex;        
        flex-direction:column;
        width:100%;
        background-color: black;
        float:right;
        display: flex;        
        margin-right:0em;    
    }   
    @media ${device.mobileL} { 
        display: flex;        
        flex-direction:column;
        width:100%;
        background-color: black;
        float:right;        
        margin-right:0em;    
    }   
    @media ${device.tablet} { 
        display: flex;
        flex-direction: row;
        width:auto;
        margin-right:2em;    
    }    
`

const LiHeader = styled.div`    
    z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
    margin-right: 0rem;    
    margin-top:0rem;  
    background-color:black;  
    font-size:2rem;        
    @media ${device.tablet} { 
        margin-right: 1rem;       
    }    
    @media ${device.mobileS} { 
        margin-top: -1rem;    
    }   
    @media ${device.mobileM} { 
        margin-top: -1rem;    
    }   
    @media ${device.mobileL} { 
        margin-top: -1rem;    
    }   
    @media ${device.tablet} { 
        margin-top: 0rem;    
    }    
`

const LiHeaderHamburger = styled.div`     
    display:flex;
    z-index: 3; /* Specify a stack order in case you're using a different order for other elements */    
    margin-top: -0.5rem;    
    background-color:black;      
    font-size:1rem;         
    justify-content:center;        
    @media ${device.mobileS} { 
        font-size:2rem;         
        margin-top: 1rem;         
    }   
    @media ${device.mobileM} { 
        font-size:2rem;         
        margin-top: 1rem;         
    }   
    @media ${device.mobileL} { 
        font-size:2rem;         
        margin-top: 1rem;         
    }   
    @media ${device.tablet} { 
        font-size:1.5rem;     
        margin-top: -0.5rem;    
    }   
`

const HambugerBtn = styled.button`    
    padding: 1rem;
    background-color:transparent;
    color: whitesmoke;
    font-family: Arial, Helvetica, sans-serif;
    transition: 0.7s;    
    font-size:2rem;
    float:right;
    cursor: pointer;    
    border:none;
    &:hover{
        color: rgb(128, 204, 255);
    }
    @media ${device.tablet} { 
        display: none;
    }    
`

const Overlay = styled.div`    
    position: fixed; /* Sit on top of the page content */    
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black; /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; 
`

const Header = () => { 
    const [menuActive, setMenuActive] = useState(false);     
    const handlerSetMenuActive = () =>{    
        menuActive ? setMenuActive(false) :setMenuActive(true);        
    }

    let widthMatch = window.matchMedia(device.tablet);    
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

    const handleSwichMenu = () =>{
        if(window.innerWidth < 728){
            setMenuActive(false);
        }
    }

    useEffect(() => {
        (window.innerWidth >= 728 && menuActive == false) && setMenuActive(true)
    }, []);
    

  return (
    <div id='headerPrincipalDiv' className='divPrincipal'>               
        <UlHeader>
                <LiHeader>
                    <HambugerBtn onClick={() => handlerSetMenuActive()}>
                        <FontAwesomeIcon icon={"fa-bars"}></FontAwesomeIcon>
                    </HambugerBtn>
                </LiHeader>
                {
                    (window.innerWidth < 728 && menuActive) && <Overlay></Overlay>
                }
                {
                    menuActive 
                    &&
                    <>                                                  
                        <LiHeaderHamburger>
                            <Link onClick={handleSwichMenu} to={`/`} className='linkHeader' >Init</Link>
                        </LiHeaderHamburger>                          
                        <LiHeaderHamburger>
                            <Link onClick={handleSwichMenu} to={`/Experience`} className='linkHeader' >Experience</Link>
                        </LiHeaderHamburger>
                        <LiHeaderHamburger>
                            <Link onClick={handleSwichMenu} to={`/Work`} className='linkHeader' >Works</Link>
                        </LiHeaderHamburger>
                        <LiHeaderHamburger>
                            <Link onClick={handleSwichMenu} to={`/Contact`} className='linkHeader' >Contact</Link>
                        </LiHeaderHamburger>                        
                        <LiHeaderHamburger>
                            <a onClick={handleSwichMenu} href={FabianCV} download="FabianCV.pdf"  className='linkHeader'>My CV</a>
                        </LiHeaderHamburger>                        
                    </>                                                        
                }                    
            </UlHeader>
    </div>    
  )
}

export default Header