import { Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { useState,useEffect } from 'react'
import { domain } from '../env'
import Cookies from 'js-cookie'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux';
import {userlogin} from '../Service/Action/Action'
import { TabTitle } from '../utils/FunctionTitle';
import axios from 'axios';
import $ from 'jquery'; 

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


import FirebaseConfig from '../utils/FirebaseConfig'
firebase.initializeApp(FirebaseConfig);

export const Authenticaton = () => {
   TabTitle('Amar Bazar | Login')

    const provider = new firebase.auth.GoogleAuthProvider();
    const fbprovider=new firebase.auth.FacebookAuthProvider();
    const handleGoogleSignIn = () => {
        
          firebase.auth().signInWithPopup(provider)
            .then(res => {
              console.log('google login data ',res)
              console.log('mahabub alam data source')
              console.log(res.additionalUserInfo.profile.email)
              console.log(res.credential.accessToken)
              dispatch(userlogin())
              window.location.href='/checkout'
             
            })
            .catch(err => {
              const errorMessage = err.message;
              console.log(errorMessage)
        
            })
        };
        
        const handelFbsignIn = () => {
            firebase.auth().signInWithPopup(fbprovider)
              .then(res => {
                var user=res.user;
                console.log('facebook login data ',user)
                dispatch(userlogin())
              window.location.href='/checkout'
                
               
              })
            
              .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage)
              })
          };
    
//simple authentication part:

   const [registernow, setRegisternow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(password)
    const [password2, setPassword2] = useState('');


    const dispatch=useDispatch()


      const loginnow = async () => {
        await axios({
            url: `https://idbdev.com/motion2/public/api/login`,
            method: 'POST',
            // headers:{"X-CSRFToken": Cookies.get("token")},
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            data: {
                username: email,
                password: password,
                // _token: '{{csrf_token()}}'

            }
        }).then(response => {
            console.log('token==',response)
            let data=response.data;
            if(data['token']){
                window.localStorage.setItem('token',data['token'])
                window.location.href='/'
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something is missing!!!!',
                    timer: 1500
                  })
            }
           
        }).catch(_ => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Somthining is error!!',
                timer: 1500
                
              })
        })
    }


console.log(Cookies.get("csrftoken"),'====1111222')

  const register = async () => {
   
    
}


   

  return (
    <div style={{marginBottom:'50px',marginTop:'40px'}}>
      
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "80vh" }}
        >
            {/* <Typography variant='h4'>{registernow ? "Register Now" : "Login Now"}</Typography> */}


            <Typography variant='h4'>Login Now</Typography>

            <Grid item xs={12} md={8} sm={8}>
                <TextField
                    id='email'
                    style={{ width: "100%", margin: "10px 0" }}
                    variant="outlined"
                    label="Email"
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                   id='pass'
                    style={{ width: "100%", margin: "10px 0" }}
                    variant="outlined"
                    label="Password"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button  variant='contained' color='primary' onClick={loginnow}> 
                    Login
                </Button>
                         
                           <br></br>
                           <br></br>

<Button  variant='contained' color='secondary'  onClick={handelFbsignIn}>
                                Facebook Login
                    </Button> 
                    <b>--OR--</b>

                       <Button  variant='contained' color='primary'  onClick={handleGoogleSignIn}>
                                Google Login
                    </Button> 
            </Grid>
        </Grid>
    </div>
  )
}
