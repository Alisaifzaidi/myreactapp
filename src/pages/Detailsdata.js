import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


function Detailsdata() {
    let { id } = useParams();

const [mydata,mydatafunc]=useState([])
const abc = ()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((e)=>{
        mydatafunc(e.data);
        console.log(mydata);
})
};
useEffect(()=>{
    abc();
},[]);
    

  return (
    <div className='container' style={{marginTop:'60px'}}>
        <div className='row bg-info'>
            <div className='col-md-6'>
                <h1>id {mydata.id}</h1>
                <h1>title {mydata.title}</h1>
                <p>body text {mydata.body}</p>
            </div>
            <div className='col-md-6'>
                <h1>default text</h1>
            </div>
        </div>
    </div>
  )
}

export default Detailsdata