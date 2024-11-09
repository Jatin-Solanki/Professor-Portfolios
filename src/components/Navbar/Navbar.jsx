import "./Navbar.css";
import { NavLink } from "react-router-dom";
export const Navbar=({titles})=>{
    console.log(titles);
    const length=titles.length-1;
    return(
        <>
        <div className="outer-container">
            <div className="logo">
                <div>
                    <img src="NSUT-University.png" alt="" height="80px" style={{marginTop:"10px" ,marginLeft:"10px"}}/>
                </div>
                <h2 className="heading">Netaji Subhas University Of Technology</h2>
            </div>
     
            <div className="nav-bar">  
                <div className="nav" >
                    {titles.map((curElement,index)=>{
                        return(
                            <div key={index} >
                                <NavLink to={curElement.link}>{curElement.name}</NavLink>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

       </> 
    )
}