import React from 'react'
import{Carousel,Card,Modal,Button, CardImg} from 'react-bootstrap'
import image1 from '../images/shoping1.jpg'
import image2 from '../images/shoping.jpg'
import image3 from '../images/shoping2.jpg'

import image4 from '../images/shoping3.jpg'
import image5 from '../images/shoping5.jpg'
import Chip from '@material-ui/core/Chip';
import './Common.css'
import image9 from '../images/image9.webp'
import image10 from '../images/image10.webp'

export const Slider = () => {
  return (
    <div className='row' style={{background:'white',marginTop:'5px',marginLeft:'2px',marginRight:'2px'}}>
          <div className='col-md-8 slide' style={{height:'380px'}}>
          <Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3}
      alt="First slide"
      style={{height:'360px',borderRadius:'15px'}}
    />
    <Carousel.Caption >
      <h3 style={{color:'#eb4334'}}>Fresh Vagetables</h3>
      <p style={{marginLeft:'30px',fontWeight:'bold'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    <Button style={{backgroundColor:'green',borderRadius:'5px',color:'white'}} className='btn-1'>Shop Now</Button>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'360px',borderRadius:'15px',}}
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'#eb4334'}}>Latest & Updates Products</h3>
      <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Button className='btn-1' style={{backgroundColor:'#09801b',borderRadius:'5px',color:'white'}}>Shop Now</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{height:'360px',borderRadius:'15px'}}
      className="d-block w-100"
      src={image2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 style={{color:'#eb4334'}}>All Updates products </h3>
      <p >Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      <Button className='btn-1' style={{backgroundColor:'#09801b',borderRadius:'5px',color:'white'}}>Shop Now</Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>

          <div className='col-md-4 ' style={{border:'2px solid tomato',height:'360px'}} id="showdiv">
                    <div style={{background:'#f0adad',height:'30px'}}>
                    <h6 style={{marginRight:'50px',}}>Latest Super Discount Active Coupon Code</h6>
 
                    </div>

          <Card style={{ width: 'auto',height:'140px',marginTop:'10px' }} >
                  <Card.Img variant="top" src={image5}  style={{height:'135px'}}/>
                  <Card.Body>
                  
                  </Card.Body>
            </Card>

            <Card style={{ width: 'auto',height:'140px',marginTop:'10px' }}>
                  <Card.Img variant="top" src={image4} style={{height:'135px'}}/>
                  <Card.Body>      
                  </Card.Body>
          </Card>

          </div>
          

          <div  className="row " style={{backgroundColor:'#f5afa9',borderRadius: '5px',marginBottom:'20px',marginLeft:'2px',}}>
            <div className='col-md-8'>
            <span>  <h4 ><strong ><span style={{color:'green'}}>100% Natural Quality</span></strong> Organic Product</h4> </span>
                    <p >See Our latest discounted products from here and get a specialdiscount product </p>
              
            </div>

            <div className='col-md-4' style={{marginTop:'25px',marginBottom:'20px'}}>
            <a href='' className='view-all-btn' >Shop Now</a>
            </div>
                 
          </div>



          {/* <div className=' row  opening' style={{background:'#8c6e91',borderRadius:'30px',marginTop:'2px',height:'100px',}}>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span><LocalShippingIcon/></span> Free Shipping From $500.00 |</p>
          </div>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span></span><PermPhoneMsgIcon/> Support 24/7 At Anytime |</p>
          </div>
          <div className='col-md-4' style={{paddingTop:'40px',fontSize:'20px'}}>
                    <p><span></span> Latest Offer Upto 20% Off |</p>
          </div> */}



    {/* </div> */}

    
    </div>
  )
}
