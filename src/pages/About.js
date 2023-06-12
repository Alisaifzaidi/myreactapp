import React, { useState } from 'react'
import About2 from './About2';
import Form  from './Form';
import Home from './Home';


function About() {
const a=500;
const b = <Form/>;
const x = <Home/>;

const [y,sfun]=useState(true)
if(y)
{
  return b;
}
if(!y)
{
  return x;
}

// const myfun =()=>{
//   sfun(false)
// }

  return (
    <div className='myabout'>

      

      <About2 abc={a} ducat="singh" page={b | x}></About2>

    </div>
  )
}

export default About