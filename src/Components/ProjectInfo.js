import {useState,useEffect,useRef} from "react"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faClose } from "@fortawesome/free-solid-svg-icons"

const ProjectInfo=({data})=>{
    const{ videoId , playId , title , description ,subDescription,firstBtn,secBtn,thirdBtn,fourthBtn,detailStack,detailinfo} = data
    //console.log(videoId)
 const [detail , setDetail] = useState(false)
const outSideClick=useRef()


useEffect(()=>{
document.addEventListener("mousedown",hideDetail)

return()=>document.removeEventListener("mousedown",hideDetail)
},[])


function hideDetail(e){
console.log(outSideClick.current)

if(outSideClick.current && outSideClick.current instanceof HTMLElement){
    
   
    if(!outSideClick.current.contains(e.target)){
    setDetail(false)
    }
}
}

function handleLive(){
    window.alert("It might be possible The live site is not working because I have used the free API for data, which changes frequently, so check out LinkedIn if it does not work. ")
    window.open(`${thirdBtn}`,"_blank","noopener,noreferrer")
}
return (
    <div className="group text-white bg-black/50 rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all">

        <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-6 p-6">

        <div className="flex-1">
          <div className="aspect-video relative rounded-lg overflow-hidden">
         {videoId?   <iframe
              className="w-full h-full"
              src={`https://geo.dailymotion.com/player/xqoji.html?video=${videoId }&playlist=${playId}&mute=true&loop=true`}
              allow="autoplay; fullscreen; picture-in-picture"
               allowFullScreen
               title="Dailymotion video player – final-educatiion video"
               frameBorder="0"
               width="100%"
               height="100%"
              // Keep existing iframe props
            />:<img className="" src={data?.link}></img>}
          </div>
        </div>

        <div className="flex-1 space-y-4 lg:w-24">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm opacity-80">{description}</p>
          
          
        </div>
         </div>
       
         <div className="flex justify-center">
            <button onClick={() => setDetail(true)} className="bg-purple-600 hover:bg-purple-700 p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer ml-0 lg:ml-2">
              Details
            </button>
            {/* Other buttons with similar styling */}

           {secBtn && <a href={secBtn} target="_blank" rel="noopener noreferrer"><button className="bg-black p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer" >Github</button></a>}
 { thirdBtn &&<button onClick={handleLive} className="bg-[#666341] p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer" >Live</button> 
}
  <a href={fourthBtn}target="_blank" rel="noopener noreferrer"><button className="bg-red-600 p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer ml-0 lg:ml-2">LinkedIn-thought</button></a>
    
          </div>
       </div>

      {detail && (
        <div className="fixed inset-0 bg-black/90  flex items-center justify-center z-[2000]">
          <div ref={outSideClick} className="bg-gray-900 ...">
          <div className="  rounded-3xl font-serif text-sm  p-12 bg-white text-black h-80 overflow-scroll">
        <div className="mb-12 "> 
            <span onClick={()=>setDetail(false)}><FontAwesomeIcon icon={faClose}/></span>
         <div className="flex justify-between flex-col sm:flex-row w-full m-auto overflow-y-scroll h-96 sm:h-auto" style={{ fontSize: 'clamp(0.8em, 6vw, 1em)' }}>
            <div className="p-2 m-1 ">
                <div className="font-extrabold font-sans">{detailStack?.toUpperCase()} </div>
            </div>
            <div className="p-1 m-1">
                <h1 className="font-bold text-lg font-serif">How it is different from Others </h1>
                <h2 className="font-serif">{detailinfo?.toLowerCase()}</h2>
            </div>
         </div>
        </div>
    </div>
          </div>
        </div>
      )}
    </div>
  )

}
export default ProjectInfo