import React, {useContext, useEffect, useState} from 'react';
import {A, navigate} from "hookrouter";
import styled from "styled-components";
import Loader from "../Spinner/Spinner";

import {AuthContext} from "../../Contexts/Auth/Auth";
import app from "../../fbase_info";
import {GridItem, Sheet, HomeContainer} from "./styled";
import {SubmitButton} from "../../assets/StyledComps";
import colors from "../../Styles/Colors";


const Hero = GridItem
const  Header = GridItem

function Home() {
    const [loading, isLoading] = useState((true))
    const {currentUser, setURL, url, userProfile} =  useContext(AuthContext)
    setURL(window.location.href)
    // const classes = useStyles();

    useEffect(()=>
    {

        async function getUserInfo() {
            let promise = new Promise((resolve, reject) => {setTimeout(() => resolve("done!"), 1000)});
            let result = await promise; // wait until the promise resolves (*)
            isLoading(false); // "done!"
        }
        getUserInfo();

    }, [url])

    return (

        <HomeContainer container spacing={3}>


            <Hero item xs={12} height={"50%"}>
                <Sheet bgphoto={"https://source.unsplash.com/user/moniqa"}>
                    xs=12

                </Sheet>
            </Hero>

            <GridItem height={"250px"} item xs={12} sm={6} >
                <Sheet>
                    xs=12 sm=6
                </Sheet>
            </GridItem>

            <GridItem item height={"250px"}  xs={12} sm={6}>
                <Sheet>xs=12 sm=6</Sheet>
            </GridItem>

            <GridItem height={"500px"} item xs={6} sm={3}>
                <Sheet >xs=6 sm=3</Sheet>
            </GridItem>

            <GridItem height={"500px"} item xs={6} sm={3}>
                <Sheet >xs=6 sm=3</Sheet>
            </GridItem>

            <GridItem height={"500px"} item xs={6} sm={3}>
                <Sheet >xs=6 sm=3</Sheet>
            </GridItem>

            <GridItem height={"500px"} item xs={6} sm={3}>
                <Sheet >xs=6 sm=3</Sheet>
            </GridItem>

        </HomeContainer>
    );
};

export default Home;

{/*<HomeContainer>*/}
{/*    <SubmitButton onClick={()=>navigate("/checkout")}>Checkout</SubmitButton>*/}
{/*    <SubmitButton onClick={()=>navigate("/signup")}>Sign Up</SubmitButton>*/}

{/*    {currentUser?*/}
{/*        <SubmitButton*/}
{/*            onClick={()=> app.auth().signOut()}*/}

{/*        >*/}
{/*            Sign Out*/}
{/*        </SubmitButton>:*/}
{/*        <SubmitButton onClick={()=>navigate("/login")}>Login</SubmitButton>}*/}
{/*    <br />*/}

{/*    { loading ?*/}
{/*        <Loader/>*/}
{/*    :*/}
{/*        <h2> Welcome {currentUser &&  userProfile? userProfile.name: "Visitor"} To The Tasty Plant Based Kitchen </h2>}*/}
{/*</HomeContainer>*/}





