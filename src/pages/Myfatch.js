import React, { useEffect, useState } from 'react'

function Myfatch() {

const [mydata,myfunc]=useState([])

    const Myfetchapi =()=>{
        // fetch('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            return res.json();
        })
        .then(abc =>{
            console.log(abc);
            myfunc(abc);
        })
        
       
    }

    useEffect(()=>{
        Myfetchapi();

    },[]);
    






  return (
    <div className='container mt-5'>
        <div className='row mt-5'>
          
                {mydata.map((e)=>{
                    return(
                        <div className='col-md-3' key={e.id}>
                        <div className="card border">
                        <div className="card-body">
                            <h5 className="card-title">{e.title}</h5>
                            <p className="card-text">{e.body}</p>
                            <a href="#" className="btn btn-primary">{e.id}</a>
                        </div>
                        </div>
                        </div>
                    )
                })}
            
        </div>


    </div>
  )
}

export default Myfatch