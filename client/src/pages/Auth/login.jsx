import React from 'react'
import Layout from '../../components/layout/layout';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate , useLocation} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { useAuth } from '../../context/auth';

const REACT_APP_API =' https://ecommercebackend-htkc.onrender.com';

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth , setAuth] = useAuth()
    const navigate = useNavigate()
    const location = useLocation();

    const handleSubmit =  async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`${REACT_APP_API}/api/v1/auth/login` , {
                email,
                password
            });
            if(response.data.success){
                toast.success(response.data.message);
                setAuth({
                    ...auth,
                    user:response.data.user,
                    token : response.data.token,
                })
                localStorage.setItem('auth' , JSON.stringify(response.data));
                navigate(location.state || '/' );
            }
            else{
                toast.error(response.data.message);
            }
        }
        catch(err){
            console.log(err);
            toast.error("something went wrong");

        }
    }

    return <Layout>
    <div>
            <div style={{
                paddingTop: 150,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center"
            }}>
                <Typography variant={"h6"}>
                 Welcome to khareedo 
                </Typography>
            </div>
         <div style={{display: "flex", justifyContent: "center"}}>
            <Card varint={"outlined"} style={{width: 400, padding: 20}}>
                <TextField
                value={email}
                    onChange={(event) => {
                        setEmail(event.target.value);
                    }}
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="Password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>
                
                <center>
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={()=>{ navigate('/forgot-password')}}

                > Forgot Password</Button>
                 <br/>
                 <br/>
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={handleSubmit}

                > Login</Button>
                </center>
            </Card>
        </div>
    </div>
    </Layout>
}

export default Login;