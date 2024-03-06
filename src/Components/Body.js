
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Body=()=>{
    const [name, setName] = useState('');
    const [msg, setMsg] = useState("");
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
       
        
       
       const res=await fetch('https://formsubmit.co/ajax/codingank@gmail.com', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
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
      

//console.log(msg)


    return(
        <>
     <div className='text-lime-600  text-sm lg:text-base absolute top-6 right-[40%] p-10 '>{msg}</div>
        <div className=" text-lg text-white " >
            <h1 className="p-2 px-6 font-bold">ChatGpt <span className="text">3.5  </span></h1>
        </div>

         <div className="flex justify-center flex-col ">
            <div className="pt-72 lg:pt-36 flex flex-col justify-center">

               <div className=""> <img className="w-9  bg-white rounded-md  m-auto" src="gpt.png" alt='img-of-gpt'></img> </div>
               <div> <h2 className="text-white font-bold text-xl pt-4 text-center">How can I help you today ?</h2></div>

            </div>
             
        <div className="text-white flex flex-col justify-center   md:m-20 mb-6  md:mb-0 pt-24 lg:pt-0">

          <div className="m-2 lg:m-0 w-full flex flex-col md:flex-row justify-center pt-8 md:pt-0">
        <Link to={"/project"}> <div className=" w-full md:w-72 mb-2 md:mb-0  p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer ">check my project <h5 className="text-xs gpt">just click one time</h5>  </div> </Link> 
       <Link to={"contact"}>   <div className="ml-0 md:ml-2 w-full md:w-72 p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer  ">contact me  <h5 className="text-xs gpt">to know about me</h5>    </div></Link>
          </div>

          <div className="m-2 mt-0 lg:m-0 w-full flex flex-col md:flex-row justify-center  pt-2">
         <Link to={"/skill"}><div className="w-full md:w-72 mb-2 md:mb-0 p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-pointer ">check my skill <h5 className="text-xs gpt">top-notch skill</h5></div></Link> 
          <div className="hidden sm:block ml-0 md:ml-2 w-full md:w-72 p-1 px-4 pr-32 border  rounded-xl bordergpt  text-base sm:text-sm gpthead hover:bg-[#424242] hover:cursor-not-allowed ">upcoming Event <h5 className="text-xs gpt">planning for upcoming  </h5></div>
          </div>

        </div>


        <div className="media text-center mb-7  bg-[#212121] border bordergpt  w-full sm:w-1/2 m-auto rounded-l-2xl rounded-r-2xl mt-0 sm:mt-16">

  

  <form onSubmit={handleSubmit}>
        <textarea
        className='out p-1  w-4/5 text-white bg-[#212121]  rounded-lg  rounded-r-xl  pt-2 pb-0 mt-1 no-scrollbar'
        rows="1" cols="3"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Send Message directly to me'
          autoComplete="off"
          required
        />
        <button className=' bg-white p-3 mb-1 mt-1 rounded-xl hover:bg-black hover:text-white text-xs md:text-sm mr-0 md:mr-3 float-right ' type="submit">Send</button>
      </form>

</div>




         </div>
        </>
    )
}
export default Body