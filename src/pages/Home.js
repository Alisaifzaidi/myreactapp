import React, { Fragment } from 'react';
import myimg from '../image/img4.jpg';
import Landingpage from './Landingpage';
const mying = "https://wallpapers.com/images/featured/a5u9zq0a0ymy2dug.jpg";


function Home() {

 const a = ()=>
 {
    const b = prompt("enter numher");
    console.log(b);
 }
 

  return (
    <Fragment>
      <h1>Home page</h1>
      <img src={myimg} width="500" alt='werimage'/>
      <img src="photo/img5.jpg" alt='ksdhfjkhsd'/>
      <img src={mying} width="300" alt='sdjfkjsd'/>
      <h1 onClick={a}> heading</h1>
      
    </Fragment>
  )
}

export default Home