
import { GoogleGenerativeAI } from "@google/generative-ai";
import { HarmBlockThreshold, HarmCategory } from "@google/generative-ai";
//import { sendResponse } from "../Components/helper";
// ...


const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_NONE,
  },
];


export const GenAi=(question,userInput,setIndi,setError,dispatch,addData)=>{
    const apiKey=process.env.REACT_APP_API_KEY;
   const genAI = new GoogleGenerativeAI(apiKey);
  
  async  function apiCall(){
        try{
            // For text-only input, use the gemini-flash-model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", safetySettings });
           // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
          
            const prompt = `
          ${question} ${userInput?.current?.value }
              `
          //console.log(prompt ,"prompt")
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
            console.log(text,response)
           if(text){
            console.log("hi i am rounning")
            
            dispatch(addData(text))
           // setData((prev)=>[...prev,{ans:text}])
          setIndi(false)
          setError(null)
         userInput.current.value="" 
      
          
           } 
          
     }catch(error){
           setIndi(false)
           setError(`something went wrong(No personal question please ) Try to ask the same question in a different way and if error continue then please inform me`)
           console.log(error)
           dispatch(addData("error"))
           userInput.current.value="" 
          }








    }

apiCall()

}

