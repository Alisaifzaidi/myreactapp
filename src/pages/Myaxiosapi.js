import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Myaxiosapi() {
const [mydata,mydatafunc]=useState([])


const abc = ()=>{
    axios.get('https://dummyjson.com/products').then((e)=>{
        mydatafunc(e.data.products)
        // console.log(e.data);
        console.log(mydata);

})

};

useEffect(()=>{
    abc();
},[]);





  return (
    <div className='container border mt-5'>
        <div className='row'>
            <div className='col-md-12'>
                <button type="button" className="btn btn-primary" onClick={abc}>fetch data</button>
            </div>
            <div className='col-md-3'>
               {mydata.map((e)=>{
                return <p>{e.brand}</p>;

               })}
            </div>
        </div>

    </div>
  )
}

export default Myaxiosapi