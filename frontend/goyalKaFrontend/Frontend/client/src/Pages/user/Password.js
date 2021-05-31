import React from 'react'
import { useState } from 'react'
import Loader from 'react-loader-spinner';
import { toast } from 'react-toastify';
import UserNav from '../../Components/Nav/UserNav'
import { auth } from '../../firebase';

function Password() {

    const [password, setpassword] = useState('');
    const [loading, setloading]  = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();

        // if(password.length < 6) {
        //     toast.error("Password length is less than 6");
        //     return;
        // }

        setloading(true);
        await auth.currentUser.updatePassword(password).then(() => {
            setloading(false);
            toast.success("password update");
        }).catch((error) => {
            setloading(false);
            toast.error(error.message);
        })
    }


    const passwordUpdateForm = () => (
        
        <form onSubmit={handleSubmit}>
            <div className="form-group container">
            {
                loading ? (
                    <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
                ):(
                    <h1 style={{fontFamily:'cursive'}}>Password Update</h1>
                )
            }
            <br/>
            <br/>
                <label style={{fontFamily:"cursive"}}>Your Password</label>
                <br/>
                <input type="password" 
                autoFocus
                disabled={loading}
                className="form-control" value={password} onChange={e => setpassword(e.target.value)}
                placeholder="Enter new Password" >

                </input>
                <button disabled={!password || loading || password.length < 6} className='btn btn-primary'> 
                    submit
                </button>
            </div>
        </form>
    )


    return (
        <div className='container-fluid'>
        <div className="row">
            <div className='col-md-2'>
                    <UserNav />
            </div>
            <div className='col'>
                    {passwordUpdateForm()}
            </div>
        </div>
            
        </div>
    )
}

export default Password
