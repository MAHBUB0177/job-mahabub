import React from 'react'
import { Button } from 'react-bootstrap'
import delivary from '../images/delivery-boy.webp'
import './Common.css'
export const QuickSell = () => {
  return (
    <div style={{background:'#f2eeed',paddingTop:'30px',paddingBottom:'30px'}}>

    
    <div className=' row ' style={{background:'#52bf81',borderRadius:'30px',paddingTop:'20px',height:'400px',marginLeft:'20px',marginRight:'20px'}}>
      <div className=" container col-sm-11" style={{backgroundColor:'white',height:'300px',borderRadius: '20px',marginTop:'50px'}}>
        <div className='row '>
          <div className='col-md-7 ' style={{marginTop:'20px',}}>
              <h5 >Organic Products and Food</h5>
              <h4 >Quick Delivery to <span style={{color:'#37b06b'}}>Your Home</span></h4>
              <p>There are many products you will find our shop, Choose your daily necessary product from our KachaBazar shop and get some special offer. See Our latest discounted products from here and get a special discount.</p>
                <Button style={{background:'#52bf81',borderRadius:'50px'}}>Download Now</Button>
          </div>
          <div className='col-md-5 delivery'>
          <img  src={delivary} alt="Second slide" />
          </div>
        </div>
      </div>

    </div>
    </div>
  )
}
