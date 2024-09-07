//import logo from './logo.svg';
//import './App.css';
import Body from './Components/Body';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Error from "./Components/Error"
import { useContext ,createContext,useState,useCallback,useEffect } from 'react';
import { Provider } from 'react-redux';
import AppSlice from './utils/AppSlice';
///context is created




 export const myContext=createContext({value:"gpt.png"})


function App() {
//now acces context
const context=useContext(myContext)

const callBackToUnLoad=useCallback(toLoad,[])
function toLoad() {
  document.getElementById("loading-overlay").style.display = "none";
}
// Hide the loading indicator when the page has fully loaded
window.addEventListener("load", callBackToUnLoad);

useEffect(()=>{

// Hide the loading indicator when the page has fully loaded
//to ensure 100% 
document.getElementById("loading-overlay").style.display = "none";




//removing it when unmounted --


return(()=>window.removeEventListener("load",callBackToUnLoad))
},[])




const routing=createBrowserRouter([
{
  path:"/",
  element:<Body/>,
  errorElement:<Error/>
},
{
  path:"project",
  element:<Project/>
},
{
 path:"skill",
element:<Skill/> 
},
{
  path:"contact",
 element:<Contact/> 
 }
 


])
//directly we cannot update so we pass useState for futher updation
let [imgChange , setImgchange] = useState(context) /// value:"gpt.png"

  return (
   <>
   <Provider store={AppSlice}>
   <myContext.Provider value={{img:imgChange,setImgchange}}> {/*img:value */}
   <RouterProvider router={routing}/>
   
   </myContext.Provider>
   </Provider>
   </>
  );
}

export default App;
