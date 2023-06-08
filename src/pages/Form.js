import React, { useState } from 'react';

function Form() {
const [first,second]=useState(1000)
const [one,b]=useState(0)

const abc = (p)=>{
  b(p.target.value);
  

}

const myinput = ()=>
{
  second(80);
}




  return (
    <div>
      <h1>Form</h1>
    <input type='text' onInput={myinput} value={first}/>
    <h1>{first}</h1>


<input type='text' value={one} onInput={abc}/>
<h2>{one}</h2>


    </div>
  )
}

export default Form