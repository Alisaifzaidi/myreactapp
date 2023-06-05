import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './pages/Nav';
import Myrectbootstrap from './pages/Reactbootstrap';
import Metrial from './pages/Metrial';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mynav/>
    <Myrectbootstrap/>
    <Metrial></Metrial>
 
  </React.StrictMode>
);

