import React from 'react'
import Layout from '../../components/Layout/Layout'
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import {Card, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
const REACT_APP_API =' https://ecommercebackend-htkc.onrender.com';
function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address , setAddress] = useState("")
    const [name , setName] = useState("")
    const [answer , setAnswer] = useState("");

    const navigate = useNavigate()

    const handleSubmit =  async(e)=>{
        e.preventDefault();
        try{
            const response = await axios.post(`${REACT_APP_API}/api/v1/auth/register` , 
            {
                name , email , password , phone , address,answer
            });
            if(response.data.success){
                toast.success(response.data.message);
                navigate('/login');
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
                <TextField
                value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    fullWidth={true}
                    label="Name"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                value={phone}
                    onChange={(e) => {
                        setPhone(e.target.value);
                    }}
                    fullWidth={true}
                    label="Phone"
                    variant="outlined"
                />
                <br/><br/>
                <TextField
                value={address}
                    onChange={(e) => {
                        setAddress(e.target.value);
                    }}
                    fullWidth={true}
                    label="Address"
                    variant="outlined"
        
                />
                <br/><br/>
                <TextField
                value={answer}
                    onChange={(e) => {
                        setAnswer(e.target.value);
                    }}
                    fullWidth={true}
                    label="Your favourite sport"
                    variant="outlined"
                    required        
                />
                <br/><br/>

                <Button
                    size={"large"}
                    variant="contained"
                    onClick={handleSubmit}

                > Signup</Button>
            </Card>
        </div>
    </div>
    </Layout>
}

export default Register;