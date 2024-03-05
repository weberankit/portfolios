import ProjectInfo from "./ProjectInfo"
import { myProject } from "../constant"
import { Link } from "react-router-dom"
console.log(myProject)
const ProjectDetails=()=>{
    
return(
<>
<div className="w-screen aspect-video   absolute text-white  bg-gradient-to-r from-black top-0 ">
    <div className="bg-gradient-to-l from-black">
  <Link to={"/"}> <div className="text-white text-center font-base sm:font-bold text-xs  sm:text-sm bg-red-600 rounded-lg p-1 sm:p-3 py-2 inline-block fixed">Home</div></Link> 
  <p className="text-indigo-500 ml-12 sm:ml-24 bg-black font-bold p-2 rounded-lg text-[.3em] sm:text-sm fixed">Api frequently changes so might be live-website  not work properly so please visit <span className="text-white"> linkedIn-Thought</span> </p>
{
    myProject.map(item=><ProjectInfo data={item}/>)
}

 
 



</div>


</div>
</>
)
}
export default ProjectDetails