//import logo from './logo.svg';
//import './App.css';
import Body from './Components/Body';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Project from './Components/Project';
import Skill from './Components/Skill';
import Contact from './Components/Contact';
import Error from "./Components/Error"
function App() {

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



  return (
   <>
   <RouterProvider router={routing}/>
   
   
   </>
  );
}

export default App;
