import { useEffect, useRef, useState } from "react"
import { category } from "../constantCategory"

import { memo } from "react"
import { sendResponse } from "./helper"
const RenderAiText=memo( ({selectData , scrollTo})=>{
 
   const [getData,setgetData] =useState(null)
   const [imgPreview, setPreview] = useState(false)


   


useEffect(()=>{
    if(selectData){
        const result = category.filter((item)=>{
       
         
            
      if(selectData.toLowerCase().trim().includes(item.categ.toLowerCase().trim())){
          // console.log(item.categ)
          sendResponse(selectData+" "+item.description)
              return item
            }
    })

    setgetData(()=>result)

    

   
}

//console.log("hi",selectData)

},[selectData])

 


if(!selectData){
    return null
}

function handleopenLink(link){
    window.open(link,"_blank")
}

    return(
        <>
        {
getData && <div>
    <div className="  ">
        
         <div>
           <div onClick={()=>setPreview(!imgPreview)} className={` hover:cursor-pointer ${imgPreview?"w-full":"w-44"} rounded-lg`}><img className="rounded-2xl" src={getData[0]?.img1} alt={"image"}></img></div>
            <div className="bg-black px-2 py-1 rounded-lg text-white font-serif w-20 mt-1 hover:bg-red-600 "><button onClick={()=>handleopenLink(getData[0]?.link)}>open</button></div>
             </div>
<div >{getData[0]?.description}</div>


    </div>

          </div>


}

<div id={scrollTo}></div>


        </>
    )
})
export default RenderAiText