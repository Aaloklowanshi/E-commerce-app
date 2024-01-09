import React from 'react'
import Layout from '../../components/layout/layout';
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"

const REACT_APP_API =' https://ecommercebackend-htkc.onrender.com';


const ForgotPassword = () => {
    const [email, setEmail] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [answer, setAnswer] = useState("")

    const navigate = useNavigate()


    const handleSubmit =  async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`${REACT_APP_API}/api/v1/auth/forgot-password` , {
                email,
                newPassword,
                answer
            });
            if(response.data.success){
                toast.success(response.data.message);
                navigate('/' );
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
  return (
    <Layout>
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
                value={newPassword}
                    onChange={(e) => {
                        setNewPassword(e.target.value);
                    }}
                    fullWidth={true}
                    label="new password"
                    variant="outlined"
                    type={"password"}
                />
                <br/><br/>
                <TextField
                value={answer}
                    onChange={(event) => {
                        setAnswer(event.target.value);
                    }}
                    fullWidth={true}
                    label="Enter you secret key"
                    variant="outlined"
                />
                
                <center>
                 <br/>
                 <br/>
                <Button
                    size={"large"}
                    variant="contained"
                    onClick={handleSubmit}

                > Reset</Button>
                </center>
            </Card>
        </div>
    </div>
    </Layout>
  )
}

export default ForgotPassword