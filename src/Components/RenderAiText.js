import { useEffect, useRef, useState } from "react"
import { category } from "../constantCategory"

import { memo } from "react"
import { sendResponse } from "./helper"
const RenderAiText=memo( ({selectData , scrollTo})=>{
 
   const [getData,setgetData] =useState(null)
   const [imgPreview, setPreview] = useState(false)

const textWordOneByOne=useRef()
   


useEffect(()=>{
    if(selectData){
        const result = category.filter((item)=>{
       
         
            
      if(selectData.toLowerCase().trim().includes(item.categ.toLowerCase().trim())){
          // sending  category and question-ans to ankit 
          sendResponse(selectData+" "+item.description)
              return item
            }
    })
 ///rsult will be object -- constant - data
    setgetData(()=>result)

   
   
}

//console.log("hi",selectData)
//{getData[0]?.description}

},[selectData])


/*
 useEffect(()=>{
      let intervalId;
     //when somehow if it rerender then it will not repeat so checking textcontent 
    if(getData && !textWordOneByOne.current.textContent){

      let count=0;   
    let text=getData[0]?.description
    console.log(getData[0]?.description)
    if(text){
    const words = text?.split(' ');
    //for check how many timeto run 
    //we cannot use words array as below we are modifying it so it will distrubed the ifand else 
    const wordsCopy=[...words]
    console.log(wordsCopy,"copy")
    if (wordsCopy.length > 0) {
       
      intervalId = setInterval(() => {
       //to remove interval after words completely grabed
        count++;
        //here removing words i.e grabing words basically but it remove words from words-array so using copy of array
        const word = words.shift();
        
        textWordOneByOne.current.textContent += word + ' '  ;
         if(count>=wordsCopy.length){ 
         console.log(count,wordsCopy.length)
            clearInterval(intervalId)
         }

      }, 200); // adjust the interval time as needed
    }
    }

}
return(()=>clearInterval(intervalId))
 },[getData])
*/


  
useEffect(() => {
    let intervalId;   
    
    // Check if data exists and the text hasn't already been set.
    if (getData && getData[0]?.description && !textWordOneByOne.current.textContent) {
      let count = 0;
      const text = getData[0].description;
      const words = text.split(' ');
      const totalWords = words.length;
      
      // If there are words to process
      if (totalWords > 0) {
        intervalId = setInterval(() => {
          const word = words[count];  // Get the current word
          textWordOneByOne.current.textContent += word + ' ';
          count++;
  
          // Stop when all words are displayed
          if (count >= totalWords) {
            clearInterval(intervalId);
          }
        }, 200); // adjust the interval time as needed
      }
    }
  
    // Cleanup to clear the interval when the component unmounts or getData changes
    return () => clearInterval(intervalId);
  }, [getData]);
  




   

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
<div ref={textWordOneByOne} className="text-sm font-bold" ></div>


    </div>

          </div>


}

<div id={scrollTo}></div>


        </>
    )
})
export default RenderAiText