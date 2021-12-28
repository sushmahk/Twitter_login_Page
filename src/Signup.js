import {Grid,Paper,Button,Avatar,TextField } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter'
import React,{useState} from 'react';
import './Signup.css'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged}from "firebase/auth";
import {auth} from './firebase-config'



 function Signup() {

 
    

    const [registerEmail,setRegisterEmail] = useState("");
    const [registerPassword,setRegisterPassword] = useState("");
    const [loginEmail,setLoginEmail] = useState("");
    const [loginPassword,setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser);
    })

    
    const  paperStyle= { padding:20, height:"70vh", width:600, margin:"40px auto"}
    const avatarStyle= {backgroundColor:'blue'}
   

    const register = async () =>{
        try{
            const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);

            console.log(user);

        } 
        catch (error) {
            
            console.log(error.message);
        }
    };


  const login =async () =>{
        
    try{
        const user = await signInWithEmailAndPassword(auth,loginEmail,loginPassword);

        console.log(user);

    } 
    catch (error) {
        console.log(error.message);
    }
};

   

    

    return (
        <div className="signin">
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align ="center">
                 <TwitterIcon className = "twitter"  />
                 <h2 className = "twitter" > Login to Relove Twitter Community </h2>
                </Grid>
               
                    <TextField label="email"  placeholder=' Please Enter your Email id' fullWidth required onChange={(event) =>{setLoginEmail(event.target.value);}}/>  
                   
                    <TextField label="password"   placeholder=' Please Enter your Password' type='password' fullWidth required onChange={(event) =>{setLoginPassword(event.target.value);}}/>  
                  
 
                    
                
                   <Button type="submit" color='primary' variant="contained" fullWidth onClick={login}> Log In </Button>


                   <div>





                
      <h2 className = "twitter" > Create  an Account to access Relove Twitter !! </h2> 

                <TextField label="email"  placeholder=' Please Enter your Email id' fullWidth required onChange={(event) =>{setRegisterEmail(event.target.value);}}/>  
                   
                 <TextField label="password"  placeholder=' Please Enter your Password' type='password' fullWidth required onChange={(event) =>{setRegisterPassword(event.target.value);}}/>  
                  

                <TextField label="password"  placeholder=' Please Confirm your Password' type='password' fullWidth required onChange={(event) =>{setRegisterPassword(event.target.value);}}/>  
                  

                <Button type="submit" color='secondary' variant="contained" fullWidth onClick={register}> Sign Up </Button>


            </div>
            
              
            </Paper>
        </Grid>
           
          
    </div>
    )
}
export default Signup