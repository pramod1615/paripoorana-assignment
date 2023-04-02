import React from 'react';
import "./App.css"
import Screen2 from './Screen2';
import Screen1 from './Screen1'
import {BrowserRouter,Routes,Route } from 'react-router-dom'


export default function App() {
    
  

    return (
        <>
        
        <BrowserRouter>
        <Routes>
          <Route element={<Screen1/>} path="/screen1"></Route>
          <Route element={<Screen2/>} path="/screen2"></Route>
        </Routes>
        
        </BrowserRouter>
        
        
        <div className='home'>
      
      <a href="/screen1"><button   >Screen1 </button> </a> 
       <a  href="/screen2"> <button> Screen2</button> </a>
     </div>
        
        </>
    );
}
        