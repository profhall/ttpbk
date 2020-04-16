import React, {useContext, useState, useEffect} from 'react';
import './App.css';
import Login from "./components/Login/Login";
import {useRoutes, setBasepath, useRedirect, navigate} from 'hookrouter';

import Routes from "./Routes";
import {AuthContext} from "./Contexts/Auth/Auth";
import SideBar from "./components/SideBar/SideBar";
import TopBar from "./components/TopBar/TopBar";


function App() {
    const routeResult = useRoutes(Routes);
    const {url, setURL, loggedIn} = useContext(AuthContext);
    setBasepath('http://localhost:3000');
    setURL(window.location.href)

    useEffect(() => {
        // setWidth(getDimensions()["width"]);
        console.log(routeResult)

        // navigate(url,false,{},false)

    }, [url,loggedIn]);

    return (
        <div className="App">
            <TopBar/>
            <SideBar/>
            {routeResult || null }
        </div>
    );
}

export default App;
