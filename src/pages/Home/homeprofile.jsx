import "./homeprofile.css"
import { RiGraduationCapFill } from "react-icons/ri";
import { RiPhoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { NavLink } from "react-router-dom";
export const HomeProfile=(props)=>{
    console.log(props);
    return(
        <>
            <div className="outer-div">
                <div className="profile-photo" >
                    <img src="jatin2.jpg" alt="" height="100%" width="100%" />
                </div>
                
                <div className="professor-name">
                    <p style={{paddingTop:"5px" ,fontWeight:"bolder", fontSize:"large"}}>{props.details["name"]}</p>
                    <p>{props.details.professor}</p>
                </div>
                <div className="qualification">
                    <span><RiGraduationCapFill style={{paddingTop:"2px" ,marginRight:"10px" , paddingLeft:"5px" } } /></span>
                    <p>  {props.details.graduation}</p>
                </div>
                <div className="contact">
                    <p>Contact Detail</p>
                </div>
                <div className="contact-details">
                    <div className="phone">
                        <span><RiPhoneFill style={{paddingTop:"2px" ,marginRight:"10px" , paddingLeft:"5px" } }  /></span>
                        <p>  {props.details.phone}</p>
                    </div>

                    <div className="email">
                        <span><MdEmail style={{paddingTop:"2px" ,marginRight:"10px" , paddingLeft:"5px"} }  /></span>
                        <p>{props.details.email}</p>
                    </div>

                    <div className="web-profile">
                        <span><FaGlobeAmericas style={{paddingTop:"2px" ,marginRight:"10px" , paddingLeft:"5px" } }  /></span>
                        <p>  <NavLink to="/about" >Web Profile</NavLink></p>
                    </div>
                     
                </div>
            </div>
            
        </>
    )
}