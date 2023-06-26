import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const Mylogin = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()} style={{marginTop:'100px'}}>Log In</button>;
  };

export default Mylogin