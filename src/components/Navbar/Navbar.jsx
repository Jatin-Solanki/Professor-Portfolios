import "./Navbar.css";
import { NavLink } from "react-router-dom";
import React, {useState} from 'react'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Navbar=({titles})=>{
    console.log(titles);
    const length=titles.length-1;

    const [showNavBarOptions, setShowNavBarOptions] = useState(false);

    return(
        <>
            <div>
                <div className="outer-container" onClick={() => setShowNavBarOptions(!showNavBarOptions)}>
                    <div className="logo">
                        <div>
                            <img className="nsut-logo" src="NSUT-University.png" alt="" height="80px" style={{marginTop:"10px" ,marginLeft:"10px"}}/>
                        </div>
                        <h2 className="heading">Netaji Subhas University Of Technology</h2>
                    </div>
            
                    <div className={ showNavBarOptions ? "nav-bar show-hamburger-options" : "nav-bar" }>  
                        <div className="nav" >
                            {titles.map((curElement,index)=>{
                                return(
                                    <div key={index} className="NavBarOption">
                                        <NavLink to={curElement.link} className="navlink">{curElement.name}</NavLink>
                                        <div className="underline"> </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="header-hamburger" onClick={() => setShowNavBarOptions(!showNavBarOptions)} >
                        <FontAwesomeIcon className="header-hamburger-bars" icon={faBars} style={{color: "var(--black)"}} />
                    </div>
                </div>
            </div>
       </> 
    )
}