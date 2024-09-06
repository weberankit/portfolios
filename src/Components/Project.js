import { useEffect } from "react"
import ProjectBg from "./ProjectBg"
import ProjectDetails from "./ProjectDetails"
import { useDispatch } from "react-redux"
import { addData, addQuestion } from "../utils/DataSlice"

const Project=()=>{
    const dispatch=useDispatch()
   

    useEffect(()=>{
 dispatch(addQuestion("close"));dispatch(addData("close"))
    },[])
    return(
        <>
<ProjectBg/>
<ProjectDetails/>
        </>
    )
}
export default Project