import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './pages/Nav';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Form from './pages/Form';
import Landingpage from './pages/Landingpage';
import Myaxiosapi from './pages/Myaxiosapi';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <BrowserRouter>
    <Mynav/>
      <Routes>
      <Route path='' element={<Landingpage/>}></Route>
          <Route path='home' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contactus/>}></Route>
          <Route path='myform' element={<Form/>}></Route>
          <Route path='myaxiosapi' element={<Myaxiosapi/>}></Route>
      </Routes>
    
    
    </BrowserRouter>
 
  </React.StrictMode>
);

