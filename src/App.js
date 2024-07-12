//import logo from './logo.svg';
//import './App.css';
import Body from './Components/Body';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Error from "./Components/Error"
import { useContext ,createContext,useState } from 'react';
///context is created
 export const myContext=createContext({value:"gpt.png"})


function App() {
//now acces context
const context=useContext(myContext)




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
   <myContext.Provider value={{img:imgChange,setImgchange}}> {/*img:value */}
   <RouterProvider router={routing}/>
   
   </myContext.Provider>
   </>
  );
}

export default App;
