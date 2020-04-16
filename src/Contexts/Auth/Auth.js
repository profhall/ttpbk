import  React, {useEffect, useState} from "react"
import app from "../../fbase_info"
import {navigate} from "hookrouter";
import * as firebase from "firebase/app";
import 'firebase/firestore';

export const AuthContext = React.createContext();

function getDimensions() {
    return {"width":window.innerWidth, "height":window.innerHeight}
}
const db = firebase.firestore(app);

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loggedIn, isLoggedIn] = useState(false)

    const [userProfile, setUserProfile] = useState(null)
    const [adminStuff, setAdminStuff] = useState({orders:[], recipes: []});
    const [url, setURL] = useState(window.location.href);


    let userDB = db.collection(`users`);
    let odersDB = db.collection(`orders`);
    let recipesDB = db.collection(`recipes`);

    useEffect( ()=> {
         function userStateChange() {
             app.auth().onAuthStateChanged(setCurrentUser)
            console.log(currentUser ? `user Set!`  + currentUser:null)
            currentUser ? isLoggedIn(true):isLoggedIn(false)

        }
        userStateChange();


        if(currentUser) {
            userDB.doc(currentUser.uid).get().then(   function(doc) {
                if (doc.exists) {
                    setUserProfile({...doc.data(),"uid": currentUser.uid});
                    // console.log("User Profile Set: ", doc.data());
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
                return () => {
                    // removing the listener when props.x changes
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        }


    },[currentUser])

    const gotoPage = (location) =>{
        console.log("navigate called" + location)

        navigate(location)
    };


    function getAdminStuff ()  {
        console.log("getting stufff admin")
        getRecipes()
        if (userProfile && userProfile.admin){
        getOrders()
        }
    }

    const getOrders = ()=>{

        adminStuff.orders = []
        odersDB.get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {

                adminStuff.orders.push(doc.data())
                setAdminStuff({...adminStuff, orders: [...adminStuff.orders]})
            });
        });
    }

    const getRecipes = () =>{
        adminStuff.recipes = []
         recipesDB.get().then(function(querySnapshot) {
             querySnapshot.forEach(function(doc) {

                adminStuff.recipes.push(doc.data())
                setAdminStuff({...adminStuff, recipes: [...adminStuff.recipes]})

            });
             console.log("got recipes")

         }).catch(function(error) {
             // The document probably doesn't exist.
             console.error("Error updating document: ", error);
         });
    }

    function updateMenu ({item, meal, available})  {

        console.log(item)
        recipesDB.doc(item.name).update({
            available: item.available
        }).then(function() {
            console.log(item.name, "updated!");
            getRecipes()
        })
            .catch(function(error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }


    return (
        <AuthContext.Provider value={{currentUser,userProfile,gotoPage,loggedIn,url,setURL}}>
            {children}
        </AuthContext.Provider>
    );

};