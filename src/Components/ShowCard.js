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
        img:img1,
        textHeding:"NamasteDev.com",
        textPara:`You did an amazing job, and you even went above and beyond by making it a
PWA. We would be grateful if you could share your insights on how you
implemented the bilingual and PWA features`
    }
    ,
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160942267220865025%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160942267220865025%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img2,
        textHeding:"Suman Shekhar",
        textPara:`Loved the bilingual feature enabling internationalization,
Can you give a rough roadmap, of how you achieved it?

One extra enhancement you can add is an auto language switching popup
based on geolocation.`
    },


    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7103294084206780416?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7103294084206780416%2C7105757785266487296%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287105757785266487296%2Curn%3Ali%3AugcPost%3A7103294084206780416%29",
        img:img3,
         textHeding:"KHAN ZAID",
        textPara:`First of all congratulations for this achievement
whenever I want to get my mind full of motivation I go throught to you
account and post. You are aure one of them whom I am inspired.❤❤`
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7121706384047427584?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7121706384047427584%2C7121719153484312577%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287121719153484312577%2Curn%3Ali%3AugcPost%3A7121706384047427584%29",
        img:img4,
         textHeding:"Madan Sharma",
        textPara:`Amazing feature that you have added`
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160898717808504832%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160898717808504832%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img5,
         textHeding:"Jyoti Deshmukh",
        textPara:`Wow amazing work Ankit Kr
`
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7100704520845897728?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7100704520845897728%2C7101408945314947072%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287101408945314947072%2Curn%3Ali%3AugcPost%3A7100704520845897728%29",
        img:img6,
         textHeding:"Deeproshan Kumar",
        textPara:`Great Job❤`
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160912473888366593%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160912473888366593%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img7,
         textHeding:"Harshit Yadav",
        textPara:`PWA is a really good concept.Nice project`
    },
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7160860222658420736?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7160860222658420736%2C7160998302262476803%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287160998302262476803%2Curn%3Ali%3AugcPost%3A7160860222658420736%29",
        img:img8,
         textHeding:"Vineet Kumar",
        textPara:`Good job`
    }, {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7195664919084593153?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7195664919084593153%2C7196129728796192768%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287196129728796192768%2Curn%3Ali%3AugcPost%3A7195664919084593153%29",
        img:img9,
         textHeding:"Gaurav Wagh",
        textPara:`Well done ankit`
    }
    ,
    {
        link:"https://www.linkedin.com/feed/update/urn:li:ugcPost:7103294084206780416?commentUrn=urn%3Ali%3Acomment%3A%28ugcPost%3A7103294084206780416%2C7103712037737795584%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287103712037737795584%2Curn%3Ali%3AugcPost%3A7103294084206780416%29",
        img:img10,
         textHeding:"Darshna Soni",
        textPara:`Great work.. saw your other projects too.. appreciable work`
    }
]


let randomNo= Math.floor(Math.random()*array.length)
const [randomState , setRandomState] = useState(randomNo)
//console.log(randomNo,randomState) 
const [hideCard , setHideCard] = useState(true)
const hideIcon=useRef()
const imgRef=useRef()

const [contentShow , setContentShow] =useState(false)

useEffect(()=>{
 
let stateCheck  =  setInterval(()=>{

  if (hideIcon.current) hideIcon.current.style.display="block"
///initally show card
    setHideCard(true)
    //if card react at last make it start from 0
    setRandomState((prev) => (prev >= array.length - 1 ? 0 : prev + 1));
   // Show the card after 6 seconds
   const showTimeout = setTimeout(() => {
    //after  6-sec hide card
    setHideCard((prev)=>false);
    //set lazy-image contnet false so that ifimage not load it will show content
    setContentShow(false)
  }, 6000);
   
  return () => clearTimeout(showTimeout);

    }, 10000)

if(hideIcon.current){
hideIcon.current.style.display="none"
}
    
    return ()=>{clearInterval(stateCheck)}

},[array.length])


function handleImageLoad(e){
if(imgRef.current){
   
    setContentShow(true)
e.target.style.opacity=1
}
if(e?.target?.complete){
    e.target.style.opacity=1

 
}
}



    return(
        <>
      {hideCard &&  <div className={`realtive `} >
        
            <div ref={hideIcon} className=" loader  absolute">   </div>
             <div className="text-white font-bold text-xs absolute right-0 z-20 p-1 rounded-sm bg-black">project-review</div>
        {
        
          <img ref={imgRef} onLoad={handleImageLoad} className=" opacity-0  w-[400px]  rounded-2xl animate-slide-from-up" src={array[randomState].img} alt="project-review-image" ></img>

        }
        {!contentShow && <div className="p-2   w-[300px] ml-2 bg-[#212121]  text-white font-bold text-sm h-32  rounded-sm  animate-slide-from-up"><p className="text-sm font-extrabold">{array[randomState].textHeding}</p><p className="text-xs font-normal">{array[randomState].textPara}</p></div>}
       
            <a href={array[randomState].link} target="_blank" rel="noopener noreferrer"><div className="absolute bottom-0 right-0 p-1 text-black font-bold cursor-pointer bg-white rounded-sm">Verify</div></a>
             
          </div>
        
    }
   
        </>
    )
})

export default ShowCard