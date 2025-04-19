
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect,useContext,useRef,useCallback } from 'react';
import { Link } from 'react-router-dom';
//import useFormSubmit from '../utils/useFormSubmit';
import { myContext } from '../App';
import {GenAi} from "../customHooks/GenAi"
//import { geminiPrompt } from './helper';
import { question } from '../constantCategory';
import RenderAiText from './RenderAiText';
import { addData, addQuestion } from '../utils/DataSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import ShowCard from  "./ShowCard"
import { motion } from 'framer-motion';
const Body=()=>{
  
const [msg, setMsg] = useState("");
const [indicate ,setIndi] =useState(false)
const [error,setError] = useState(null)
    
const dispatch=useDispatch()
const userInput = useRef(null)



//to scroll to last response
const scrollRef=useRef(null)
const selectData=useSelector((store)=>store.dataSlice.value)
const selectQuestion=useSelector((store)=>store.dataSlice.question)
//const [CardPosition , setCardPosition] = useState(false)

let firstInterval;
let secondInterval

const handleSubmit = (text)=>{ 
async function call() {
 const userText = text;
firstInterval = setTimeout(() => {
setMsg("Ankit will receive your question");
secondInterval = setTimeout(() => {
setMsg("");
          }, 3000);
        }, 700);

        try{
      // Send the form data as JSON
        const res = await fetch('https://formsubmit.co/ajax/codingank@gmail.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({data:text})
        });
      
        clearInterval(firstInterval);
        clearInterval(secondInterval);
        setMsg("");

      }catch(error){

      }
      };
  call()
    }
//grab img and update function so we can update img
let {img,setImgchange}=useContext(myContext) //note img:value


useEffect(()=>{
  let timer=setTimeout(()=>{
setImgchange({value:"Ankitkr.jpg"})
  },1000)

  window.addEventListener("keydown",keypressed)



return()=>{clearTimeout(timer);window.removeEventListener("keydown",keypressed);}

},[])

//for scrolling
/**/
useEffect(()=>{
  if (selectQuestion?.length > 1 && scrollRef.current) {
    // Scroll to the project element
  scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });

// 
  }


},[selectQuestion?.length,selectData?.length])

//to ask ai


let isSubmitting = false;
//isubmiting is not necessary is not important to use here
const handleAsk= async ()=>{
 // console.log(userInput.current.value.trim().length)
  if(isSubmitting ||  userInput?.current?.value.trim().length==0){
    alert("please ask question ")
    return
  }

  isSubmitting = true;
  setTimeout(() => { isSubmitting = false; }, 1000); // Prevent multiple submissions within 1 second
console.log("tgis is bef")
  dispatch(addQuestion(userInput.current.value))

  handleSubmit(userInput.current.value);
//console.log(userInput.current.value) 
//to indicate
setIndi(true)
 await GenAi(question,userInput,setIndi,setError, dispatch,addData)

 }
 
const handleAskCallback =useCallback(handleAsk,[])
let debounceTimeout;
function keypressed(e){
  if (e.key === 'Enter' && userInput?.current?.value) {
    if (debounceTimeout) return;
    
    handleAskCallback();

    
    
    debounceTimeout = setTimeout(() => {
      debounceTimeout = null; // Reset the timeout after 300ms
  }, 300);
}
}

  return(
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2 }}
  >
        <div className="max-w-[1700px] mx-auto px-4">
  { selectQuestion?.length>0 && <>   <div  className={`  p-2 fixed bg-[#212121] font-serif  h-96 overflow-y-scroll mx-auto w-full`}>     
      <div className='w-full md:w-1/2 m-auto ' >
      {<button className='bg-red-600 rounded-lg text-white font-serif p-1 px-2 fixed' onClick={()=>{dispatch(addQuestion("close"));dispatch(addData("close"))}}>close</button>}
      {indicate && <div className='fixed bg-black rounded-2xl text-center font-bold text-white mt-2'>Ai Fetching the data wait ....</div>}
      {error && <div className='fixed bg-black rounded-t-xl rounded-b-lg text-sm text-center  text-white mt-2 p-1 py-2'> <div className="text-black p-1 rounded-lg float-right bg-white hover:bg-gray-600 hover:cursor-pointer" onClick={()=>setError(null)}>close</div>{error}</div>}
        {selectQuestion && selectQuestion.map((item, index) => {
         
          return (
            <div key={item+index}  className='mb-4 text-white '>
              <span  className='text-right bg-[#2f2f2f] p-4 mb-2 rounded-md float-right clear-both project'>
                {item}{index === selectQuestion?.length-1 && <a href='#scroll'> <span className='bg-black px-1 py-2  text-center rounded-xl hover:bg-white'>👇🏿</span></a>}
              </span>
              
              <div ref={index === selectQuestion.length-1?scrollRef:null} style={{ 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: 400
    }} className={`  line-height-[28px] text-[16px] tracking-normal font-normal   text-left bg-[#2f2f2f] p-4 rounded-2xl float-left clear-both w-2/3`}>
                {/*catgory send after ai - anylisis--stored in array as like question in array  */}
          { selectData &&     <RenderAiText selectData={selectData[index]} scrollTo={index === selectData.length-1?"scroll":null} />}
              </div>
           
            </div>
          );
        })}
      </div>
    </div>
   

   </>
}

{
  !selectQuestion.length && <div className={` top-4 fixed z-[100]   right-2  `} ><ShowCard/></div> 
}

     <div className='text-lime-600  text-sm lg:text-base fixed z-50 top-6 right-[40%] p-10 '>{msg}</div>
        <div className=" text-lg  " >
            <h1 className="p-2 px-6 font-bold text-white">ChatGpt <span className="  text ">7.<span className='text-[#ba7bcd]'>O</span>  </span></h1>
        </div>

         <div className="flex justify-center flex-col ">
            <div className="pt-72 lg:pt-36 flex flex-col justify-center">

               <div className=""> <img className="w-9  bg-white rounded-md  m-auto " src={img.value}  alt='img-of-gpt'></img> </div>
               <div> <h2 className=" text-white font-bold text-xl pt-4 text-center">How can I help you today ?</h2></div>

            </div>
             
        <div className="text-white flex flex-col justify-center   md:m-20 mb-6  md:mb-0 pt-24 lg:pt-0">  

          <div className="m-2 lg:m-0 w-full flex flex-col sm:flex-row justify-center pt-8 md:pt-0">
        <Link to={"/project"}> <div className=" w-full md:w-72 mb-2 md:mb-0  p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer ">check my project <h5 className="text-xs gpt">just click one time</h5>  </div> </Link> 
       <Link to={"contact"}>   <div className="ml-0 md:ml-2 w-full md:w-72 p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer  ">contact me  <h5 className="text-xs gpt">to know about me</h5>    </div></Link>
          </div>

          <div className="m-2 mt-0 lg:m-0 w-full flex flex-col sm:flex-row justify-center  pt-2">
         <Link to={"/skill"}><div className="w-full sm:w-72 md:w-72 mb-2 md:mb-0 p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer ">check my skill <h5 className="text-xs gpt">top-notch skill</h5></div></Link> 
         <a href="https://medium.com/@codingank" rel='noopener noreferrer' target='_blank'> <div className="hidden sm:block ml-0 md:ml-2 w-full md:w-72 p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer">Technical Blog by me <h5 className="text-xs gpt">Understand the concept  </h5></div></a>
          </div>

        </div>


        <div className=" relative media text-center mb-7  bg-[#212121] border bordergpt  w-full sm:w-1/2 m-auto rounded-l-2xl rounded-r-2xl mt-0 sm:mt-16">
<span className= 'text-xs text-white absolute right-0 top-[-2px ] z-50 p-[1px] rounded-l-md bg-black'>Beta✨</span>
  
  
        <textarea
        ref={userInput}
        className='out p-1 met  w-4/5 text-white bg-[#212121]  rounded-lg  rounded-r-xl  pt-2 pb-0 mt-1 no-scrollbar'
        rows="1" cols="3"
          type="text"
          name="name"
        
          //onChange={(e) => setName(e.target.value)}
          placeholder='Ask me Anything About me '
          autoComplete="on"
          required
        />
    {   !indicate ? <button  type='submit' className=' bg-white p-3 mb-1 mt-1 rounded-xl hover:bg-black hover:text-white text-xs md:text-sm mr-0 md:mr-3 float-right ' onClick={()=>{handleAskCallback();}}  >Ask me</button>
       : <button type="submit"  className=' hover:cursor-wait p-3 mb-1 mt-1 rounded-xl text-xs md:text-sm mr-0 md:mr-3 float-right shadow-2xl animate-pulse bg-gray-700 text-white'   >.....</button>
    }
    
       

</div>




         </div>
        </div>

        </motion.div>
    )
}
export default Body

