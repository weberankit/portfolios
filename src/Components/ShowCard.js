import img1 from "../images/namastedev.png"
import img2 from "../images/suman.png"
import img3 from "../images/khanzaid.png"
import img4 from "../images/madan.png"
import img5 from "../images/jotideskhmukh.png"
import img6 from "../images/deeprosh.png"
import img7 from "../images/harshit.png"
import img8 from "../images/vineet.png"
import img9 from "../images/gaurav.png"
import img10 from "../images/darshansoni.png"

import { useEffect, useState,memo,useRef} from "react"

const ShowCard=memo(()=>{

let array=[
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160865668593070081%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160865668593070081%2Curn%3Ali%3AugcPost%3A7160860222658420736%29v",
        img:img1
    }
    ,
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160942267220865025%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160942267220865025%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img2
    },


    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7103294084206780416?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7103294084206780416%2C7105757785266487296%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287105757785266487296%2Curn%3Ali%3AugcPost%3A7103294084206780416%29",
        img:img3
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7121706384047427584?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7121706384047427584%2C7121719153484312577%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287121719153484312577%2Curn%3Ali%3AugcPost%3A7121706384047427584%29",
        img:img4
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160898717808504832%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160898717808504832%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img5
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7100704520845897728?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7100704520845897728%2C7101408945314947072%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287101408945314947072%2Curn%3Ali%3AugcPost%3A7100704520845897728%29",
        img:img6
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160912473888366593%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160912473888366593%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img7
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160998302262476803%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160998302262476803%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img8
    }, {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7195664919084593153?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7195664919084593153%2C7196129728796192768%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287196129728796192768%2Curn%3Ali%3AugcPost%3A7195664919084593153%29",
        img:img9
    }
    ,
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7103294084206780416?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7103294084206780416%2C7103712037737795584%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287103712037737795584%2Curn%3Ali%3AugcPost%3A7103294084206780416%29",
        img:img10
    }
]


let randomNo= Math.floor(Math.random()*array.length)
const [randomState , setRandomState] = useState(randomNo)
//console.log(randomNo,randomState) 
const [hideCard , setHideCard] = useState(true)
const hideIcon=useRef()


useEffect(()=>{
    




let stateCheck  =  setInterval(()=>{

  if (hideIcon.current) hideIcon.current.style.display="block"

    setHideCard(true)
    setRandomState((prev) => (prev >= array.length - 1 ? 0 : prev + 1));
   // Show the card after 6 seconds
   const showTimeout = setTimeout(() => {
    setHideCard((prev)=>false);
  }, 6000);
   
  return () => clearTimeout(showTimeout);

    }, 10000)

if(hideIcon.current){
hideIcon.current.style.display="none"
}
    
    return ()=>{clearInterval(stateCheck)}

},[array.length])




    return(
        <>
      {hideCard &&  <div className={`realtive `} >
        
            <div ref={hideIcon} className=" loader  absolute">   </div>
             <div className="text-white font-bold text-xs absolute right-0 p-1 rounded-sm bg-black">project-review</div>
            <img className="   w-[400px]  rounded-2xl " src={array[randomState].img} alt="project-review-image" ></img>
            <a href={array[randomState].link} target="_blank" rel="noopener noreferrer"><div className="absolute bottom-0 right-0 p-1 text-black font-bold cursor-pointer bg-white rounded-sm">Verify</div></a>
             
          </div>
        
    }
   
        </>
    )
})

export default ShowCard