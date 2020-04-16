import React, {useContext, useState, useEffect} from 'react';


import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
// import Steps from "./components/StepsCarousel/StepsCarousel";
import Checkout from "./components/Checkout/Checkout";
import Menu from "./components/Menu/Menu";
import Admin from "./components/Admin/Dashboard";
import SignUp from "./components/SignUp/SignUp";
import CreateRecipe from "./components/CreateRecipe/CreateRecipe";





const routes = {
    "/": () => <Home  />,
    "/menu": () => <Menu  />,
    "/checkout": () => <Checkout  />,
    "/signup" : () => <SignUp/>,
    "/login" : () => <Login/>,
    "/newrecipe" : () => <CreateRecipe/>,
    "/admin" : () => <Admin/>
};
export default  routes