import React from 'react'
import { useState } from 'react'
import {auth} from "../../firebase"
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { toast } from 'react-toastify';
import { useEffect } from 'react';



function Forgetpasswords() {
    const [email, setemail] = useState("");
    const [loading, setloading] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const {user} = useSelector((state) => ({...state }));

    useEffect(() => {
        if(user && user.token){
            history.push('/');
        }
    }, [user]);




    const handlesumbit = async(e) => {
        e.preventDefault();
        setloading(true);
        const config = {
            url: "http://localhost:3000/login",
            handleCodeInApp: true,
            
        }

        await auth.sendPasswordResetEmail(email, config).then((result) => {
            setemail("");
            setloading(false);
            toast.success("Check your email for password reset link");
         
        }).catch((error) => {
            setloading(false);
            toast.error(error.message);
        })
    }

    return (
        <div className="container col-md-5 offset-md-4 p-5">
            {
                loading ? (
                    <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
                ):(
                    <h4 style={{fontFamily:"cursive"}}>Forget password</h4>
                )
            }

            <form onSubmit={handlesumbit}>
                <input type="email" className="form-control"
                value={email}
                onChange={e => setemail(e.target.value)}
                placeholder="Enter your email"
                autoFocus
                 />
            </form>
        </div>
    )
}

export default Forgetpasswords
