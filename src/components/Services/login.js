import app from "../../fbase_info"
import {navigate} from "hookrouter";

export function login(email, password, loading)  {
        // const {email, password} = {...userLogin}
        console.log(email, password)

        try{
            loading(true)
             app.auth()
                .signInWithEmailAndPassword(email,password).then(()=>{
                    console.log(`User Logged In!`);
                    // return true
                    loading(false)

                });


        } catch (error){
            alert(error)
            loading(false)

        }
        // return false

    }