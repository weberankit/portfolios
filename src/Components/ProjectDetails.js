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

return (
  <div className="relative z-10 container mx-auto px-4 py-12">
    <div className="mb-8 flex items-center justify-between ">
      <Link to="/" className="bg-red-600 hover:bg-red-700 ... px-4 py-1 rounded-sm font-serif text-white">
        Home
      </Link>
      
      <div className="bg-black/50 p-3 rounded-lg backdrop-blur-sm text-white">
        <p className={`...`}>
          {ind.main} 
          <span className={`...`}>{ind.sub}</span>
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
      {myProject.map((item, index) => (
        <ProjectInfo key={index} data={item} />
      ))}
    </div>
  </div>
)

}
export default ProjectDetails