
const ProjectBg = () => {
  return (
    <div className="fixed inset-0 z-0">
      <img 
        src="lib.jpg" 
        className="w-full h-full object-cover animate-kenburns"
        alt="Background" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/20" />
    </div>
  )
}
  export default ProjectBg
  