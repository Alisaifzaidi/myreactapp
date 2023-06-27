import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector,useDispatch } from 'react-redux';
import { increment,decrement } from '../redux/createSlicer';

const Mylogin = () => {
    const { loginWithRedirect } = useAuth0();
  
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return( 
    <div>
    <button onClick={() => loginWithRedirect()} style={{marginTop:'100px'}}>Log In</button>
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>


    </div>
    )

  };

export default Mylogin