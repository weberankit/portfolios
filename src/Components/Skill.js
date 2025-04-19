
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { mySkill } from "../constant"
import { Link } from "react-router-dom"
import SkillBg from "./SkillBg"
//import ProjectBg from "./ProjectBg"
import { useDispatch } from "react-redux"
import { addData, addQuestion } from "../utils/DataSlice"
import { useEffect } from "react"
import { motion } from "framer-motion"
const Skill=()=>{
    const dispatch=useDispatch()
   

    useEffect(()=>{
 dispatch(addQuestion("close"));dispatch(addData("close"))
    },[])

  
    return(
        <>
        <div className="fixed hidden xl:block"><SkillBg/></div>
        <div className="text-white absolute w-full aspect-video">
           <Link to={"/"}> <div className="fixed"><button className="bg-red-600 p-3 py-2 text-sm font-bold ml-1 rounded-lg ">Home</button> </div></Link>
            <div >
         
            <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 pt-10 m-auto w-2/3 "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
      }}
    >
      {
        mySkill.map((item ,index)=>{
            return(
                <>
                   <motion.div key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                <div key={index} className={` text-white font-bold text-sm w-28 sm:w-32 p-6  shadow-2xl ${item.clip} mb-10 animate-pulse md:animate-none bg-black`}> 
       <svg xmlns="http://www.w3.org/2000/svg" viewBox={item.viewBox} fill={item.bg} className="p-2 w-10 sm:w-16 m-auto ">
       <path d={item.pathd}/></svg> 
         <p className="text-center">{item.text}</p>
        </div> 
        </motion.div>
                </>
            )
        })
      }
      </motion.div>


            </div>
   
     
        </div>
        </>
    )
}
export default Skill