import React from 'react';


function About2(props) {
  return (
    <div className='about2'>
        <h2>About2</h2>
        <h3>this is child element {props.abc} {props.ducat}</h3>
        <div> {props.page}</div>
    </div>
  )
}

export default About2