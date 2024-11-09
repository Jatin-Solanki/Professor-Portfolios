import{Outlet} from "react-router-dom"
import { Navbar } from "../components/Navbar/Navbar"
let titles=[
    {name:"Home",link:"/"},
    {name:"About me",link:"/about"},
    {name:"Lab Page",link:"/lab"},
    {name:"Publication",link:"/publication"},
    {name:"Invited Talks",link:"/invited"},
    {name:"Volunteer Activities",link:"/volunteer"}
]
export const AppLayout=()=>{
    return(
        <>
            <Navbar titles={titles}/>
            <Outlet/>
        </>
    )
}