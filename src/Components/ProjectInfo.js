
const ProjectInfo=({data})=>{
    const{ videoId , title , description ,subDescription,firstBtn,secBtn,thirdBtn,fourthBtn} = data
    //console.log(videoId)
 
/*
let iframe = document.querySelectorAll('iframe');
var iframes = document.querySelector('iframe');
iframes.contentWindow.postMessage('{"method":"setMuted","params":true}', '*');
if(iframe){
iframe.forEach(iframe => {
    // Check if the iframe has a content window
    const contentWindow = iframe.contentWindow;
    if (contentWindow) {
        // Post a message to the iframe to mute the video (if supported)
        contentWindow.postMessage('{"method":"setMuted","params":true}', '*');
    }
});
}
*/





/*
if(iframe){
   */ 
/*The postMessage method sends a message to the window of the target iframe. 
The message is specified as the first argument and must be a string. In this case, 
it's a JSON string representing an object with a method (setMuted) and parameters (true) to mute the video.
The second argument '*' specifies the target origin that the message is intended for.
 Using '*' means the message is intended for any origin, allowing communication across origins. */
 /*
iframe.contentWindow.postMessage('{"method":"setMuted","params":true}', '*');
}
*/


 return(
    <>
      <div className=" w-full sm:w-96 sm:m-auto lg:w-3/4 m-2 lg:m-auto pt-14">
<div className="flex justify-center lg:justify-around flex-col lg:flex-row ">
<div>
   
   
    <iframe
       
        className="w-80"
        src={`https://geo.dailymotion.com/player/xqoji.html?video=${videoId }&playlist=x86svc&mute=true`}
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
      <a href={firstBtn} target="_blank" rel="noopener noreferrer"> <button className="bg-violet-800 p-3 py-2 rounded-xl text-xs lg:text-sm m-2 ml-0 cursor-pointer" >more Details</button></a>
   <a href={secBtn} target="_blank" rel="noopener noreferrer"><button className="bg-black p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer" >Github</button></a>
   <a href={thirdBtn} target="_blank" rel="noopener noreferrer"><button className="bg-black p-3 py-2 rounded-xl text-xs lg:text-sm m-2 cursor-pointer" >Live</button></a>  
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