import React, { useEffect } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Home from './Pages/Home';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Header from './Components/Nav/Header';
import RegisterComplate from './Pages/Auth/RegisterComplate';
import Forgetpassword from './Pages/Auth/Forgetpasswords';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { currentuser } from './Function/auth';
import History from './Pages/user/History';
import UserRoute from './Components/Route/UserRoute';
import Password from './Pages/user/Password';
import Wishlist from './Pages/user/Wishlist';
import AdminRoute from './Components/Route/AdminRoute';
import AdminDashboard from './Pages/admin/AdminDashboard';
import CategoryCreate from './Pages/admin/Category/CategoryCreate';
import SubCreate from './Pages/admin/sub/SubCreate';
import ProductCreate from './Pages/product/ProductCreate';
import Allproduct from './Pages/product/Allproduct';
import Product from './Pages/Product';
import CategoryHome from './Pages/Category/CategoryHome';
import SubCategoryList from './Components/Category/SubCategoryList';
import Subhome from './Pages/Category/Subhome'
import Sell from './Components/cards/Sell';
const App = () => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        const OnSubcribe = auth.onAuthStateChanged(async (user) => {
            if(user){
                const idTokenResult = await user.getIdTokenResult();
                currentuser(idTokenResult.token).then((res) => 
                
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

            

                }
        })
        return() => OnSubcribe();
    },[])

   return( 
    <div >
    <Header/>
    <ToastContainer/>
    <Switch>
    <Route exact path="/">
        <Home/>
    </Route>
    <Route exact path="/login">
        <Login/>
    </Route>
    <Route exact path="/register">
        <Register/>
    </Route>
    <Route exact path="/register/complate">
        <RegisterComplate/>
    </Route>
    <Route exact path="/forgot/password">
        <Forgetpassword />
    </Route>
    <UserRoute exact path="/user/history">
        <History />
    </UserRoute>
    <UserRoute exact path="/user/password">
        <Password />
    </UserRoute>
    <UserRoute exact path="/user/wishlist">
        <Wishlist />
    </UserRoute>
    <UserRoute exact path="/Sell">
        <Sell />
    </UserRoute>
    <UserRoute  path="/product/product/:slug">
        <Product />
    </UserRoute>
    <UserRoute  path="/category/:slug">
        <CategoryHome />
    </UserRoute>
    <UserRoute  path="/sub/:slug">
        <Subhome />
    </UserRoute>
    <AdminRoute exact path='/admin/dashboard'>
        <AdminDashboard />
    </AdminRoute>
    <AdminRoute exact path='/admin/category'>
        <CategoryCreate />
    </AdminRoute>
    <AdminRoute exact path='/admin/subcategory'>
        <SubCreate />
    </AdminRoute>
    <AdminRoute exact path='/admin/product'>
        <ProductCreate />
    </AdminRoute>
    <AdminRoute exact path='/admin/products'>
        <Allproduct />
    </AdminRoute>
    </Switch>

     
  </div>
   );
  
}

export default App;
