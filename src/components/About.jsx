import React from 'react'
import image11 from '../images/image11.jpg'
import image12 from '../images/image12.jpg'
import '../page/Common.css'
import image13 from '../images/image13.jpg'
import image18 from '../images/image18.jpg'

import team1 from '../images/team1.jpg.webp'
import team2 from '../images/team-2.jpg.webp'
import team3 from '../images/team-4.jpg.webp'
import team4 from '../images/team-6.jpg.webp'

import { width } from '@mui/system'


import { Card} from 'react-bootstrap';
import Chip from '@mui/material/Chip';
import { TabTitle } from '../utils/FunctionTitle'



export const About = () => {

      // document.title="About"
      TabTitle('Amar Bazar | About')
  return (
    <div className=''>
          <div className='row d-flex' style={{background:'#f0faf3',height:'200px'}} >
                    <div className='col-md-4 opening'>
                              <img src={image11} alt=' ' style={{height:'200px',marginRight:'135px'}}/>
                    </div>
                    <div className='col-md-4'>
                              <h2 style={{textAlign:'center',marginTop:'80px'}}>About Us</h2>
                    </div>
                    <div className='col-md-4 opening'>
                              <img src={image12} alt=' ' style={{height:'200px',marginLeft:'135px'}}/>
                    </div>
          </div>

          


          <div className='row' style={{paddingTop:'20px',display:'flex'}}>
            <div className='col-md-7'>
              <h2>Welcome to our AmarBazar</h2>
              <p style={{fontSize:'18px'}}>
              Holisticly seize parallel metrics and functional ROI. Seamlessly revolutionize error-free internal or "organic" sources before effective scenarios. Progressively incentivize state of the art applications for efficient intellectual capital. Credibly leverage existing distinctive mindshare through cutting-edge schemas. Proactively procrastinate team building paradigms coordinate client-centric total transparent internal.
              Dynamically embrace diverse customer service and installed base paradigms. Credibly seize enterprise-wide experiences for end-to-end data. Professionally brand flexible alignments and cost effective architectures. Enthusiastically incentivize seamless communities with seamlessly facilitate revolutionary metrics with strategic theme areas.
              </p>
            </div>

            <div className='col-md-5' style={{paddingTop:'20px'}}>
                  <img src={image18} alt=''  style={{height:'220px',borderRadius:'10px' ,width:'350px'}}/>
            </div>
          </div>

            
<div className='row'>
<h4 style={{color:'#644F9C',marginTop:'10px'}}>Our Valuable Customers</h4>

          <div className='shadow' style={{backgroundColor:'#644F9C',marginTop:'30px',}}>
         
          <div className=' row d-flex  ' style={{paddingBottom:'10px',paddingTop:'10px'}} >
              <div className='col-md-4 client' >
                  <Card style={{ width: '18rem',height:'200px',clipPath:'circle()',borderStyle:'dotted',backgroundColor:'gray',marginLeft:'30px' }}>
                  <Card.Title></Card.Title>
                        <Card.Body>
                        <Card.Text>
                                  <h2 style={{marginTop:'30px'}} id='counter1'>1B+ </h2>
                                  <p>daily impressions</p>
                        </Card.Text>   
                        </Card.Body> 
                  </Card>

          

              </div>
                 <div className='col-md-4 client'>
                          <Card style={{ width: '18rem',height:'200px',clipPath:'circle()',backgroundColor:'white',marginLeft:'30px'  }}>
                              <Card.Title></Card.Title>
                                    <Card.Body>
                              <Card.Text>
                                              <h2 style={{marginTop:'30px'}} id='counter2'>1000+</h2>
                                              <p>paid</p>
                                </Card.Text>   
                                </Card.Body>                                       
                          </Card>
                  </div>

                  <div className='col-md-4 client' >
                          <Card style={{ width: '18rem' ,height:'200px',clipPath:'circle()',backgroundColor:'#FF6F00',marginLeft:'30px'  }} >
                                  <Card.Title></Card.Title>
                                  <Card.Body>
                                  <Card.Text>
                                      <h2 style={{marginTop:'30px'}} id="counter3">800+</h2>
                                      <p>Global Publishers</p>
                                  </Card.Text>   
                                  </Card.Body>    
                            </Card>
                  </div>
         </div> 
     </div>   
     </div>


     <div  style={{marginTop:'20px'}}>
      <div className='col-md-12' style={{textAlign:'left',marginLeft:'50px'}} >
            <h2 >Our Founder</h2>
            <p style={{fontSize:'18px',}}>We’re impartial and independent, and every day we create distinctive, world-class<br/> reintermediate backend supply programmes.</p>

      </div>

      <div className='row container ' style={{display:'flex'}}>
            <div className='col-md-3 founder'  >
                  <Card style={{ width: '16rem' ,height:'200px', marginLeft:'40px',}} id='owner'>
                                      <img src={team1} alt ='' style={{width:'16rem',height:'200px',borderRadius:'5px'}} />
                            </Card>
                          
                            <div className='col-md-2' >
                                    <h4 style={{width:'15rem'}}>Niamh Shea</h4>
                                    <p style={{width:'15rem'}}>Co-founder & Executive</p>
                             </div>
            </div>

            <div className='col-md-3 founder' >
                          <Card style={{ width: '16rem' ,height:'200px', marginLeft:'50px',}} id='owner'>
                                      <img src={team2} alt ='' style={{width:'16rem',height:'200px',borderRadius:'5px'}} />
                            </Card>
                            <div className='col-md-2' >
                        <h4 style={{width:'15rem'}}>Orla Dwyer</h4>
                        <p style={{width:'15rem'}}>Chief Executive</p>
                        </div>
            </div>


            <div className='col-md-3 founder ' >
                          <Card style={{ width: '16rem' ,height:'200px', marginLeft:'50px',marginBottom:'10px'}} id='owner'>
                                      <img src={team3} alt ='' style={{width:'16rem',height:'200px',borderRadius:'5px'}} />
                        </Card>
                        <div className='col-md-2' >
                        <h4 style={{width:'15rem'}}>Dara Frazier</h4>
                        <p style={{width:'15rem'}}>Chief Strategy Officer</p>

                        </div>
                        
            </div>

            <div className='col-md-3 founder' >
                          <Card style={{ width: '16rem' ,height:'200px', marginLeft:'50px',}} id='owner'>
                                      <img src={team4} alt ='' style={{width:'16rem',height:'200px',borderRadius:'5px'}} />
                            </Card>
                            <div className='col-md-2' >
                                    <h4 style={{width:'15rem'}}>Melvin Davis</h4>
                                    <p style={{width:'15rem'}}>Lead Developer
</p>

                              </div>
            </div>

            


      </div>

     </div>

     

    </div>
  )
}





