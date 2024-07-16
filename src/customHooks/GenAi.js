
import { GoogleGenerativeAI } from "@google/generative-ai";

export const GenAi=(question,data,setData,setIndi)=>{
    const apiKey=process.env.REACT_APP_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);
  async  function apiCall(){
        try{
            // For text-only input, use the gemini-flash-model
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
          
            const prompt = `
          ${question} ${data}
              `
          //console.log(prompt ,"prompt")
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();
           setData((prev)=>[...prev,{ans:text}])
           setIndi(false)
        //   console.log(data,"ff")
          }catch(error){
           setData((prev)=>[...prev,{ans:"something went wrong please refresh page and if error continue then please inform me"}])
          }
    }

apiCall()

}