import { HomeProfile } from "./homeprofile"
import { Homedetails } from "./homedetails"
import './homepage.css'

let details={
  name:"Jatin Solanki",
  professor:"Professor(BioTech)",
  graduation:"B.Tech,Netaji Shubhas University Of Technology,New Delhi",
  phone:"1102-23449",
  email:"jatinsolanki@gmail.com"
};

const prof_details=[["The About Me or Profile section of your portfolio, is a short summary about yourself in relation to the type of role you are applying for. In the sample portfolio, the student has highlighted their program, the projects they've worked on and their specific area of interest in their field.I’m a great place for you to tell a story and let your users know a little more about you.<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos ut incidunt itaque consequuntur vitae nisi blanditiis? Deleniti iusto, dignissimos hic perferendis odio laborum cupiditate cumque eum aperiam fugiat. Numquam, ea?Cumque incidunt obcaecati inventore est recusandae optio dolor aliquid, at eius odio accusantium, amet non facilis qui ad quod culpa rem eaque molestiae et dolorum distinctio beatae nostrum vitae? Nam. Nulla suscipit quibusdam praesentium, voluptates quos, nemo quasi eum velit quia dolor tempore eveniet voluptatibus aliquid similique doloribus? Ullam ab neque ipsum sit omnis iure reiciendis repellat, cumque doloremque facilis!Mollitia, voluptas! Quam recusandae placeat molestiae iste saepe ipsa commodi, voluptatibus sapiente, reprehenderit, aut odio fugit optio consectetur pariatur aliquid debitis laboriosam blanditiis unde sequi adipisci voluptate expedita voluptatem! Dolorem"],
["Sparse Recovery","Low-rank matrix completion","Medical Imaging","Biomedical Signal Processing","Collaborative Filtering","Bio Technology","Gene Cloning"],
["Data Structure & Algorithm","Web Devlopment","Dna Sequencing","Dna Alingment"]
];

export const HomePage=()=>{
    return(
        <>
        <div className="combine">
            <div className="home-profile">
                <HomeProfile details={details} /> 
            </div>
            <div className="home-details">
                <Homedetails prof_details={prof_details}/>   
            </div>
                     
        </div>
        </>
    )
}