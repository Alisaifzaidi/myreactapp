import React from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './pages/Nav';
import Myrectbootstrap from './pages/Reactbootstrap';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Mynav/>
    <Myrectbootstrap/>
 
  </React.StrictMode>
);

