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
 return(
    <>

{detail && <>
<div ref={outSideClick}>
    <div className=" h-2/3 w-full top-20 rounded-3xl  fixed p-12 bg-white text-black">
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
        </div>,
    </div>
</div>
</>}





      <div className=" w-full sm:w-96 sm:m-auto lg:w-3/4 m-2 lg:m-auto pt-14">
<div className="flex justify-center lg:justify-around flex-col lg:flex-row ">
<div>
   
   
    <iframe
       
        className="w-80 rounded-2xl shadow-lg hover:cursor-pointer"
        src={`https://geo.dailymotion.com/player/xqoji.html?video=${videoId }&playlist=${playId}&mute=true&loop=true`}
       allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Dailymotion video player – final-educatiion video"
        frameBorder="0"
        width="100%"
        height="100%"
      // style={{ width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
      ></iframe>


</div>



<div className="text-white p-1 lg:p-4 pt-4 lg:pt-0 w-full lg:w-1/2">
    <div className=" font-bold text-sm lg:text-2xl">{title} </div>
    <div className="pt-2">
    <h1 className="text-sm">{description}</h1>
        <h1 className="text-xs">{subDescription}</h1>
     
 <div className="mt-2 pt-6 ">
      <button onClick={()=>setDetail(true)} className="bg-violet-800 p-3 py-2 rounded-xl text-xs lg:text-sm m-2 ml-0 cursor-pointer" >more Details</button>
   <a href={secBtn} target="_blank" rel="noopener noreferrer"><button className="bg-black p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer" >Github</button></a>
   <button onClick={handleLive} className="bg-[#666341] p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer" >Live</button> 
   <a href={fourthBtn}target="_blank" rel="noopener noreferrer"><button className="bg-red-600 p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer ml-0 lg:ml-2">LinkedIn-thought</button></a>
    
    
    </div>

    </div>
   
</div>
</div>
</div>
   
    </>
 )
}
export default ProjectInfo