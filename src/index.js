import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import Mynav from './pages/Nav';

import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Form from './pages/Form';
import Landingpage from './pages/Landingpage';
import Myaxiosapi from './pages/Myaxiosapi';
import Myfatch from './pages/Myfatch';
import Myloader from './myloading/Myloader';
import Mychart from './pages/Mychart';
import { Auth0Provider } from '@auth0/auth0-react';
import Mylogin from './pages/Mylogin';
import { Provider } from 'react-redux';
import { store } from './redux/Storage';


const Mylazy1 = lazy(()=> import('./myloading/Morepage'));



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <BrowserRouter>
    <Auth0Provider 
    domain="dev-2lztdozl12hbrfpe.us.auth0.com"
    clientId="WTv2A4DOYunRulqeSTWTtMoVErYTbmjI"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    <Mynav/>
      <Routes>
        <Route path='' element={<Mylogin/>}/>
      {/* <Route path='' element={<Landingpage/>}></Route> */}
          <Route path='home' element={<Home/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contactus/>}></Route>
          <Route path='myform' element={<Form/>}></Route>
          <Route path='myaxiosapi' element={<Myaxiosapi/>}></Route>
          <Route path='myfetch' element={<Myfatch/>}></Route>
          <Route path='lazyloading' element={
            <Suspense fallback={<Myloader/>}>
              <Mylazy1/>
            </Suspense>
          }/>
           <Route path='mychart' element={<Mychart/>}></Route>
         
      </Routes>
      </Auth0Provider>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

