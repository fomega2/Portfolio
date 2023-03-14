import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Presentation from './components/Presentation'
import Header from './components/Header';
import SideBars from './components/SideBars';
import About from './components/About';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Work from './components/Work';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Header></Header>
      <SideBars></SideBars>
      <Presentation></Presentation>
      <Footer></Footer>
    </>,
  },
  {
    path: "/About",
    element: 
    <>
      <Header></Header>
      <SideBars></SideBars>
      <About></About>
      <Footer></Footer>
    </>    
  },
  {
    path: "/Experience",
    element: 
    <>
      <Header></Header>
      <SideBars></SideBars>
      <Experience></Experience>
      <Footer></Footer>
    </>    
  },
  {
    path: "/Work",
    element: 
    <>
      <Header></Header>
      <SideBars></SideBars>
      <Work></Work>
      <Footer></Footer>
    </>    
  },  
  {
    path: "/Contact",
    element: 
    <>
      <Header></Header>
      <SideBars></SideBars>
      <Contact></Contact>
      <Footer></Footer>
    </>    
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
