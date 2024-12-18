import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from'./App';
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import WebDevelopment from './WebDevelopment';
import DigitalMarketing from './DigitalMarketing';
import GraphicDesign from './GraphicDesign';
import ConsultingPage from'./ConsultingPage'
import AppDevelopment from './AppDevelopment';
import SEOOptimization from './SEOOptimization';




const  router=createBrowserRouter(
  createRoutesFromElements(
    <Route  element={<App/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='about' element ={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='services' element={<Services/>}/>
      <Route path='web-development' element={<WebDevelopment/>}/>
      <Route path="digital-marketing" element={<DigitalMarketing />} />
      <Route path="graphic-design" element={<GraphicDesign />}/>
      <Route path='consulting' element={<ConsultingPage/>}/>
      <Route path='appdevelopment' element={<AppDevelopment/>}/>
      <Route path='seooptimization' element={<SEOOptimization/>}/>
      
    </Route>
    
   
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
