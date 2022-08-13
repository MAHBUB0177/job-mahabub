import React from 'react'
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpg'
import '../page/Common.css'
import { Button, Card, } from 'react-bootstrap';
import {  Form, Label, Input } from 'reactstrap';
import contact from '../images/contact-us.jpg.webp'
import '../page/Common.css'
import Swal  from 'sweetalert2'
import { TabTitle } from '../utils/FunctionTitle';
export const Contact = () => {
  TabTitle('Amar Bazar | Contact')
          const handelSubmit = event => {
                    let name = document.getElementById('name').value;
                    let email = document.getElementById('email').value;
       
                  
                    if (name === "" || email === '' ) {
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please fillup carefully!',
                        // timer: 2000
                      })
                      
                  
                    }
                    else {
                     Swal.fire({
                      icon: 'success',
                      title: 'Your message has been sent successfully!!',
                      showConfirmButton: false,
                      timer: 1500
                     })
                    
                    }
                  
                    event.preventDefault()
                    var frm = document.getElementsByName('contact-form')[0];
                    frm.submit(); // Submit the form
                    frm.reset();  // Reset all form data
                    // return false; // Prevent page refresh
                   }
  return (
          
    <div>
           <div className='row d-flex' style={{background:'#f0faf3',height:'200px'}} >
                    <div className='col-md-4 opening'>
                              <img src={image11} alt=' ' style={{height:'200px',marginRight:'135px'}}/>
                    </div>
                    <div className='col-md-4'>
                              <h2 style={{textAlign:'center',marginTop:'80px'}}>Contact Us</h2>
                    </div>
                    <div className='col-md-4 opening'>
                              <img src={image12} alt=' ' style={{height:'200px',marginLeft:'135px'}}/>
                    </div>
          </div>


          <div className='row d-flex ' style={{paddingTop:'80px',paddingBottom:'40px',flexWrap:'wrap'}}>
               <div className='col-md-4'>
               <Card style={{ width: '22rem' ,height:'250px',marginBottom:'10px',marginLeft:'10px',marginRight:'10px'  }} id='owner'>

                    <Card.Body>
                    <span class="flex justify-center text-4xl text-emerald-500 mb-4" style={{paddingTop:'60px',color:'green'}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></span>
                    <h5 style={{marginTop:'10px'}}>Email Us</h5>
                    <p style={{fontSize:'18px'}}><span style={{color:'green',fontWeight:'bold'}}>amarbazar@gmail.com </span>Interactively grow empowered for process-centric total linkage.</p>
                    </Card.Body>
              </Card>

               </div>

               <div className='col-md-4'>
               <Card style={{ width: '22rem' ,height:'250px',marginBottom:'10px',marginLeft:'10px',marginRight:'10px' }} id='owner'>
                    
               <Card.Body>
               <span class="flex justify-center text-4xl text-emerald-500 mb-4" style={{color:'green'}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></span>
                    <h5 style={{marginTop:'10px'}}>Phone Us</h5>
                    <p style={{fontSize:'18px'}}><span style={{color:'green',fontWeight:'bold'}}>029-00124667  </span>Interactively grow empowered for process-centric total linkage.</p>
                    </Card.Body>
              </Card>

               </div>
               <div className='col-md-4'>
               <Card style={{ width: '22rem' ,height:'250px', marginBottom:'10px',marginLeft:'10px',marginRight:'10px' }} id='owner'>
               <Card.Body>
               <span class="flex justify-center text-4xl text-emerald-500 mb-4" style={{color:'green'}}><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></span>
                    <h5 style={{marginTop:'10px'}}>Location</h5>
                    <p style={{fontSize:'18px'}}>Cecilia Chapman, 561-4535 Nulla LA, United States 96522</p>
                    </Card.Body>
               </Card>

               </div>


          </div>

        

         <div className='row d-flex' style={{marginTop:'30px',marginBottom:'20px'}}>
          <div className='col-md-6 contactimg'>
                    <img src={contact} alt='contact'  style={{height:'300px'}}/>
          </div>

          <div className=' col-md-6 contactfrm ' >
                    <h4>For any suppoort just send your query</h4>
                    <p>Collaboratively promote client-focused convergence vis-a-vis customer directed alignments via plagiarize strategic users and standardized infrastructures.</p>
                    <Form name='contact-form '>
                              <div className=' row col-md-6 contactfrm' >
                               <div className="col-md-6">
                                                  <Label htmlFor="firstname" >Name</Label>
                                                  <Input type="text" name="name" id="name"
                                                  placeholder="Enter Name" required />

                                        </div>

                                        <div className="col-md-6">
                                                  <Label htmlFor="firstname" >Email Address</Label>
                                                  <Input type="text" name="Email Address" id='email'
                                                  placeholder="Email Address" required  />

                                         </div>

             

                                        <div className="col-md-12">
                                                  <Label htmlFor="Subject" >Subject</Label>
                                                  <Input type="text" name="Subject" id="subject"
                                                  placeholder="Enter Your Subject" required />

                                        </div>

                                        <div className="col-md-12">
                                                  <Label htmlFor="Subject" >Message</Label>
                                                  <Input type="textarea" name="Message" id="message"
                                                            placeholder="Enter Your Message" required />

                                        </div>
                                        <div className='col-md-6 mt-2'>
                                        <Button type='btn btn-primary btn-sm' onClick={handelSubmit}>Send Messege</Button>

                                        </div>
                                        

                              </div>
                    </Form>
          </div>


         </div>
    </div>
  )
}
