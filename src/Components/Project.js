import { useEffect } from "react"
import ProjectBg from "./ProjectBg"
import ProjectDetails from "./ProjectDetails"
import { useDispatch } from "react-redux"
import { addData, addQuestion } from "../utils/DataSlice"
const Project = () => {
    // Existing code remains same
    return (
      <div className="relative min-h-screen overflow-hidden">
        <ProjectBg />
        <ProjectDetails />
      </div>
    )
  }
  export default Project