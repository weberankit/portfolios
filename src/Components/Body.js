
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState,useEffect,useContext,useRef } from 'react';
import { Link } from 'react-router-dom';
//import useFormSubmit from '../utils/useFormSubmit';
import { myContext } from '../App';
import {GenAi} from "../customHooks/GenAi"
import { geminiPrompt } from './helper';
const Body=()=>{
    const [name, setName] = useState('');
    const [msg, setMsg] = useState("");
    const [data, setData] = useState([])
    const [indicate ,setIndi] =useState(false)
const userQuestion=`you have to Act like professional answer expert and answer this question ${name} from given information in bullet and also add emoji on front of bullet`
//console.log(userQuestion)
//to scroll to last response
const scrollRef=useRef(null)
    let firstInterval;
    let secondInterval
    const handleSubmit = async (e) => {
        e.preventDefault();
        setName("")
     firstInterval=   setTimeout(()=>{
          setMsg("Successfully message sent")
      secondInterval=    setTimeout(()=>{
          setMsg("")
        },3000)
        },1000)
       //JSON.stringify(Object.fromEntries(new FormData(e.target)))
     //    const val=document.querySelector(".met")
       //  console.log(val,val.textContent)
       //  let str=val.textContent
           //  console.log(e.target.value)
       const res=await fetch('https://formsubmit.co/ajax/codingank@gmail.com', {
            method: 'POST',
          
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body:JSON.stringify(Object.fromEntries(new FormData(e.target)))
          });


      /*Object.fromEntries(new FormData(e.target)) gathers form data 
      into a JavaScript object,
       and JSON.stringify() converts this object into a JSON string suitable 
       for sending via a network request.  */
       clearInterval(firstInterval)
       clearInterval(secondInterval)
       //if clearinterval clear it before executing so to prevent we again using clearinterval
       setMsg("")
        
        
        
      };
      //grab img and update function so we can update img
let {img,setImgchange}=useContext(myContext) //note img:value


useEffect(()=>{
  let timer=setInterval(()=>{
setImgchange({value:"Ankitkr.jpg"})
  },1000)
return()=>clearInterval(timer)
},[])

//for scrolling

useEffect(()=>{
  if (data?.length > 1 && scrollRef.current) {
    // Scroll to the project element
  scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
 console.log(scrollRef)
  }
},[data])

//to ask ai
const handleAsk=()=>{
  console.log(name.trim().length)
  if(name.trim().length==0){
    alert("please ask question with complete sentence")
    return
  }
console.log("let check")
setIndi(true)
GenAi(userQuestion,geminiPrompt,setData ,setIndi)
//console.log(data)


 setData((prev)=>{
  return [...prev ,{ques:name}]
 })
 console.log(data,"data")
}
  return(
        <>
  { data?.length>0 &&    <div className=' p-2 fixed bg-[#212121] font-serif  h-96 overflow-y-scroll mx-auto w-full'>
      <div className='w-full md:w-1/2 m-auto'>
      {<button className='bg-red-600 rounded-lg text-white font-serif p-1 px-2 fixed' onClick={()=>setData([])}>close</button>}
      {indicate && <div className='fixed bg-black rounded-2xl text-center font-bold text-white mt-2'>Fetching the data wait ....</div>}
        {data && data.map((item, index) => {
          return (
            <div key={index}  className='mb-4 text-white '>
              <span ref={index === data.length-1?scrollRef:null} className='text-right bg-[#2f2f2f] p-4 mb-2 rounded-md float-right clear-both project'>
                {item.ques}
              </span>
              
              <div style={{ 
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: 400
    }} className='line-height-[28px] text-[16px] tracking-normal font-normal   text-left bg-[#2f2f2f] p-4 rounded-2xl float-left clear-both w-2/3'>
                {item.ans}
              </div>
            
            </div>
          );
        })}
      </div>
    </div>
}


     <div className='text-lime-600  text-sm lg:text-base absolute top-6 right-[40%] p-10 '>{msg}</div>
        <div className=" text-lg text-white " >
            <h1 className="p-2 px-6 font-bold">ChatGpt <span className="text">3.5  </span></h1>
        </div>

         <div className="flex justify-center flex-col ">
            <div className="pt-72 lg:pt-36 flex flex-col justify-center">

               <div className=""> <img className="w-9  bg-white rounded-md  m-auto" src={img.value}  alt='img-of-gpt'></img> </div>
               <div> <h2 className="text-white font-bold text-xl pt-4 text-center">How can I help you today ?</h2></div>

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


        <div className="media text-center mb-7  bg-[#212121] border bordergpt  w-full sm:w-1/2 m-auto rounded-l-2xl rounded-r-2xl mt-0 sm:mt-16">

  
  <form onSubmit={handleSubmit}>
        <textarea
        className='out p-1 met  w-4/5 text-white bg-[#212121]  rounded-lg  rounded-r-xl  pt-2 pb-0 mt-1 no-scrollbar'
        rows="1" cols="3"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Ask me Anything About me '
          autoComplete="on"
          required
        />
        <button className=' bg-white p-3 mb-1 mt-1 rounded-xl hover:bg-black hover:text-white text-xs md:text-sm mr-0 md:mr-3 float-right ' type="submit" onClick={()=>handleAsk()}>Ask me</button>
      </form>

</div>




         </div>
        </>
    )
}
export default Body