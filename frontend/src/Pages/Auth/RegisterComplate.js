
import React, { useEffect } from 'react'

import  {create0update}  from '../../Function/auth'; 
import { useState } from 'react'
import {auth} from "../../firebase"
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

import {useDispatch} from 'react-redux';

function RegisterComplate() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("")
    const history = useHistory();
    const dispatch = useDispatch();

    


    const handleSubmit = async(e) => {
        e.preventDefault();

        // validation

        if(!email || !password){
            toast.error("check your email and password");
            return;
        }

        if(password.length < 6){
            toast.error("enter more than 6 charcter");
            return;
        }


        try{
            const result = await auth.signInWithEmailLink(email, window.location.href);

            if(result.user.emailVerified){
                // remove user email from local store
                window.localStorage.removeItem("emailForRegister");
                // update password
                var user = auth.currentUser;
                await user.updatePassword(password);

                const idTokenResult = await user.getIdTokenResult();
               
                // redux store
                create0update(idTokenResult.token).then((res) => 
                dispatch({
                    type: "LOGIN_USER",
                    payload: {
                        name: res.data.name,
                        email: res.data.email,
                        token: idTokenResult.token,
                        role: res.data.role,
                        _id: res.data._id
                    },
                }),
               
                ).catch((err) => console.log("ERROR", err));
    


                // redirect url
                history.push('/');
            }
            
        }catch(error){
                toast.error(error.message);
        }
        
    }

    useEffect(() => {
        setemail(window.localStorage.getItem("emailForRegister"))
    },[])


    const complateregisterForm = () => (
        <form onSubmit={handleSubmit}>
            <input type="email" 
            value={email}
            disabled
            className="form-control" />
            <br/>
            <input type="password" 
            value={password}
            autoFocus
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
            className="form-control" />
            <br/>
            <button type="submit" className="btn btn-raised">Register complete</button>
        </form>
    )



    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                        <h4>Register complete</h4>
                        
                        {complateregisterForm()}
                </div>
            </div>
        </div>
    )
}

export default RegisterComplate
