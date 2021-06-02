
import React from 'react'

import { useState } from 'react'
import {auth} from "../../firebase"
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import {useSelector} from 'react-redux'
function Register() {
    const [email, setemail] = useState("");

    const history = useHistory();
    
    const {user} = useSelector((state) => ({...state }));

    useEffect(() => {
        if(user && user.token){
            history.push('/');
        }
    }, [user]);



    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(email);
        const config = {
            url: "http://localhost:3000/register/complate",
            handleCodeInApp: true,
            
        }
        await auth.sendSignInLinkToEmail(email,config);
        toast.success(`Email is send to ${email}. Click on the link to complate your registation`);
        
        window.localStorage.setItem("emailForRegister", email);
        setemail("");
        
    }


    const registerForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="email" 
            value={email}
            placeholder="Your email"
            autoFocus
            onChange={e => setemail(e.target.value)}
            className="form-control" />
            <br/>
            <button type="submit" className="btn btn-raised">Register</button>
        </form>
    )



    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                        <h4>Register</h4>
                        
                        {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default Register
