
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { mySkill } from "../constant"
import { Link } from "react-router-dom"
import SkillBg from "./SkillBg"
//import ProjectBg from "./ProjectBg"
const Skill=()=>{



    return(
        <>
        <div className="fixed hidden md:block"><SkillBg/></div>
        <div className="text-white absolute w-full aspect-video">
           <Link to={"/"}> <div className="fixed"><button className="bg-red-600 p-3 py-2 text-sm font-bold ml-1 rounded-lg ">Home</button> </div></Link>
            <div className="grid grid-cols-2 sm:grid-cols-3 pt-10 m-auto w-2/3 ">
       
      
      {
        mySkill.map((item)=>{
            return(
                <>
                <div className={` text-white font-bold text-sm w-28 sm:w-32 p-6  shadow-2xl ${item.clip} mb-10 animate-pulse md:animate-none bg-black`}> 
       <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} fill={item.bg} className="p-2 w-10 sm:w-16 m-auto ">
       <path d={item.pathd}/></svg> 
         <p className="text-center">{item.text}</p>
        </div> 
           
                </>
            )
        })
      }
     


            </div>
   
     
        </div>
        </>
    )
}
export default Skill