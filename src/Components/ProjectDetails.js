import ProjectInfo from "./ProjectInfo"
import { myProject } from "../constant"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
console.log(myProject)
const ProjectDetails=()=>{

    const impMsg=[
      {
      main:"Api frequently changes so might be live-website  not work properly so please visit",
      sub:"linkedIn-Thought",
      mainColor:"text-indigo-500",
      subColor:"text-white"
    }
    ,
    {
      main:"To view project video on large screen and for more controll on video click on ",
      sub:"Video",
      mainColor:"text-white",
      subColor:"text-indigo-500"

    }
  ]
    const [ind,setInd]=useState(impMsg[0])

/**/
function callRandom(){
  const randomNo=Math.floor(Math.random()*impMsg.length)
  setInd(()=>impMsg[randomNo])
 // console.log("hi")
}
useEffect(()=>{
const timer=setInterval(()=>{
callRandom()
},10000)
return(()=>clearInterval(timer))
},[])

return(
<>
<div className="w-screen aspect-video   absolute text-white  bg-gradient-to-r from-black top-0 ">
    <div className="bg-gradient-to-l from-black p-2">
  <Link to={"/"}> <div className="text-white text-center font-base sm:font-bold text-xs  sm:text-sm bg-red-600 rounded-lg p-1 sm:p-3 py-2 inline-block fixed">Home</div></Link> 
  <p className={` ${ind.mainColor} ml-12 sm:ml-24 bg-black font-bold p-2 rounded-lg text-xs sm:text-sm fixed`}>{ind.main} <span className={`${ind.subColor}`}> {ind.sub}</span> </p>
{
    myProject.map((item,index)=><ProjectInfo key={index} data={item}/>)
}

 
 



</div>


</div>
</>
)
}
export default ProjectDetails