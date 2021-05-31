import React from 'react'
import { Route } from 'react-router-dom';
import {useSelector} from 'react-redux'
import LoadingToRedirect from './LoadingToRedirect';
import { useState } from 'react';
import { currentAdmin } from '../../Function/auth';
import { useEffect } from 'react';


function AdminRoute({children, ...rest}) {
    const {user} = useSelector((state) => ({... state}));
    const [ok, setOk] = useState(false);

    useEffect(() => {
       if(user && user.token){
           currentAdmin(user.token).then((res) => {
                console.log("CURRENT ADMIN RES", res);
                setOk(true);
           }).catch((err) => {
                console.log("ADMIN ROUTE ERR", err);
                setOk(false);
           })
       }
    }, [user])


    return ok ? (
        <Route {...rest} render={() => children} />
    ) : (
        <>

            <LoadingToRedirect />
            <br/>
            <h4 className='container text-center '>Access Denied! Admin resource</h4>
        </>
        
    )
}

export default AdminRoute;
