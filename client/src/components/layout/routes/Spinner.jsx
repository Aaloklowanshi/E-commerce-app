import * as React from 'react';
import { useState  , useEffect} from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import {useNavigate , useLocation} from "react-router-dom"


export default function Spinner({path = "/login"}) {
  const[count , setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    const  interval = setInterval(()=>{
      setCount((preValue)=> --preValue)
    }, 1000);

    count === 0 && navigate(`/${path}` , {
      state : location.pathname
    })
    return ()=> clearInterval(interval)
  }, [count , navigate , location , path])

  return(
    <>

    {/* <center> */}

    <div className='d-flex flex-column justify-content-center align-items-center'
    style={{height : "100vh"}}
    >

      <h1 className='Text-center'> redirecting to you in {count} seconds</h1>
     <div className="spinner-border" role="status">
     <span className="visually-hidden">Loading...</span>
     </div>
     
    </div>
    
    {/* </center> */}
    </>
  )

}