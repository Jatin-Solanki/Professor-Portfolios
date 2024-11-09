import "./homedetails.css";
import { CgProfile } from "react-icons/cg";
import { GiArchiveResearch } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
export const Homedetails=(props)=>{
    console.log(props);
    const research_interest=props.prof_details[1];
    console.log(research_interest);
    const teaching_interest=props.prof_details[2];
    return(
        <>
        <div className="outer">
            <div>
                <span><CgProfile style={{color:"rgb(31, 3, 57)"}} /></span>
                <h2 style={{display:"inline-block",marginLeft:"5px"}}>Profile</h2>
            </div>

            <div className="profile">
                <p>{props.prof_details[0][0]}</p>
            </div>
            <div>
                <span><GiArchiveResearch style={{color:"rgb(31, 3, 57)"}} /></span>
                <h2 style={{display:"inline-block",marginLeft:"5px",marginTop:"7px"}}>Research Interest</h2>
            </div>
            <div className="research-interest">
               <ul>
                    {research_interest.map((CurrElem,index)=>{
                        return <li key={index}> <FaArrowRightLong /> {CurrElem}</li>
                    })}
               </ul>
            </div>
            <div>
                <span><GiTeacher style={{color:"rgb(31, 3, 57)"}}/></span>
                <h2 style={{display:"inline-block",marginLeft:"5px"}}>Teaching Interest</h2>
            </div>
            <div className="teaching-interest">
                <ul>
                        {teaching_interest.map((CurrElem,index)=>{
                            return <li key={index}> <FaArrowRightLong /> {CurrElem}</li>
                        })}
                </ul>
            </div>
        </div>
        </>
    )
}