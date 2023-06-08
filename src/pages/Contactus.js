import React, { useEffect, useState } from 'react'

function Contactus() {

const [svar,sfun]=useState("kumar");
const myfun = (u)=>{
    console.log(u);
    // console.log(u.target.value);
    sfun(u.target.value);
    console.log(svar);
}

const [a,b]=useState("orange");
const abc = (e)=>{
  document.body.style.backgroundColor=a;
    b(e.target.value);
}

const myusefun = ()=>{
  alert("this is use of useEffect function in react js");
}

useEffect( ()=>{ myusefun(); })



  return (
    <div>
      <h1>Contactus</h1>
      <input type="text" value={svar} onInput={myfun}/>
      <input type='color' onChange={abc}/>
      
      <p>{svar}</p>

    </div>
  )
}

export default Contactus