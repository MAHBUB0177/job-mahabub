
// import React, { Component } from "react";
import {  Form, Label, Input } from 'reactstrap';
import { Button  } from '@mui/material';
import Swal  from 'sweetalert2'
import { useSelector ,useDispatch} from 'react-redux';
import {decrementCounterALL} from '../Service/Action/Action'
import {Link} from 'react-router-dom'

import React from 'react'
import { TabTitle } from '../utils/FunctionTitle';
 const CheckOut = () => {
     TabTitle('Amar Bazar | CheckOut')
    const dispatch=useDispatch()


  const handelSubmit = event => {
    let phone = document.getElementById('phone').value;
    let name = document.getElementById('firstName').value;
    let lname = document.getElementById('lastName').value;
    let email = document.getElementById('email').value;
    let street = document.getElementById('street').value;
  
    if (name === "" || phone==='' ||  lname==="" || email === '' || street==="") {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fillup carefully!',
        timer: 2000
      })
    }
    else {
     Swal.fire({
      icon: 'success',
      title: 'Your Order Is Confirmed!!',
      showConfirmButton: false,
      timer: 2500,
     })
     dispatch(decrementCounterALL());
    window.location='/'
    console.log('mahbub reedirect')
    }
  
//     event.preventDefault()
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit(); // Submit the form
    frm.reset();  // Reset all form data

    // return false; // Prevent page refresh
   }

  return (
    <div className="container" style={{marginBottom:'5px'}}>
    <div className="row row-content">
     <div className="col-12">
      <h2 style={{color:'green'}}>Shipping Information Details</h2>
      <hr/>
     </div>

     <div>
     <Form   name='contact-form'>
     <div className="row" style={{display:'flex'}}>
      <div className="col-12"><h4>1.Personal Information</h4></div>
     <div className="col-md-6">
     <Label htmlFor="firstname" >First Name</Label>
     <Input type="text" name="firstname" id="firstName"
          placeholder="First Name" required
          />

     </div>

     <div className="col-md-6">
     <Label htmlFor="firstname" >Last Name</Label>
     <Input type="text" name="Last Name" id="lastName"
          placeholder="Last Name" required
          />

     </div>

     <div className="col-md-6">
     <Label htmlFor="firstname" >Email Address</Label>
     <Input type="text" name="Email Address" id='email'
          placeholder="Email Address" required
          />

     </div>

     <div className="col-md-6">
     <Label htmlFor="firstname" >Phone Number</Label>
     <Input type="text" name="Phone Number" id="phone"
          placeholder="Phone Number" required
          />

     </div>
     </div>

     <div className="row" style={{display:'flex',marginTop:'10px'}}>
     <div className="col-12"><h4>02. Shipping Details</h4></div>
     <div className="col-md-12" style={{marginBottom:'10px'}}>
     <Label htmlFor="firstname" >Street address</Label>
     <Input type="text" name="Phone Number" id="street"
          placeholder="Street address" required
          />

     </div>

     <div className="col-md-4">
     <Label htmlFor="firstname" >City</Label>
     
          <select id='city' class='form-control'>
               <option>Select City----</option>
               <option>Dhaka</option>
               <option>Rajshahi</option>
               <option>khulna</option>
               <option>Borishal</option>
               <option>Chittagong</option>

          </select>

     </div>

     <div className="col-md-4">
     <Label htmlFor="firstname" >Country</Label>
     <select id="cars" name="cars" class="form-control" style={{overflow:'hidden'}}>
          <option>Select Country----</option>
    <option value="volvo">Bangladesh</option>
    <option value="saab">India</option>
    <option value="fiat">Pakisthan</option>
    <option value="audi">Srilanka</option>
  </select>
     

     </div>

     <div className="col-md-4">
     <Label htmlFor="firstname" >ZIP / Postal</Label>
     <Input type="text" name="Phone Number"
          placeholder="ZIP / Postal"
          />

     </div>

     <div className="col-md-6">
     <Label htmlFor="firstname" >Shipping Cost</Label>
     <Input type="text" name="Phone Number"
          placeholder="FedEx
          Delivery: Today Cost : $60.00"
          />

     </div>

     <div className="col-md-6" style={{marginTop:'10px'}}>
     <Label htmlFor="firstname" ></Label>
     <Input type="text" name="Phone Number"
          placeholder="UPS
          Delivery: 7 Days Cost : $20.00"
          />

     </div>

     </div>

     <div className="row d-flex" style={{marginTop:'10px'}}>
      <div className="col-12" ><h4>03.Payments Details</h4></div>
     <div className="col-md-6">
     <Label htmlFor="firstname" ></Label>
     <Input type="text" name="Phone Number"
          placeholder="Cash On Delivery"
          />

     </div>

     <div className="col-md-6">
     <Label htmlFor="firstname" ></Label>
     <Input type="text" name="Phone Number"
          placeholder="Credit Card"
          />

     </div>


     </div>
     
     <div className='col-12 mt-2' >
       <Button variant="contained" color="secondary" style={{ width: '260px' ,marginLeft:'5px'}} onClick={handelSubmit}>Confirm Order</Button>

  </div>
  
     </Form>
     </div>

     


    </div>

   </div>
  )
}

export default CheckOut



