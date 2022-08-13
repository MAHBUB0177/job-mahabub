import React from 'react'
import image9 from '../images/image9.webp'
import image10 from '../images/image10.webp'
import './Common.css'

export const Banner = () => {
  return (
    <div  style={{background:'#dfe8e1',}}>
     <div className='row'>
          <div className='col-md-4 opening' >
             <img src={image9} alt='' style={{height:'350px'}}/>
          </div>
          <div className='col-md-4 text-muted bannertext'>
                    <h2 style={{paddingTop:'20px'}}><b>Get Your Daily Needs From<br/> Our KachaBazar Store</b></h2>
                    <p>There are many products you will find our shop, Choose <br/>your daily necessary product from our KachaBazar shop<br/> and get some special offer.</p>
                    <div className='row' style={{display:'flex'}}>
                                    <div className='col-md-6 ' style={{marginTop:'10px',}}>
                                        <img src="https://www.availtrade.com/public/frontEnd/footer/appStore.png" />

                                    </div>
                                    <div className='col-md-5 ' style={{marginTop:'10px',marginLeft:'5px'}}>
                                        <img src="https://www.availtrade.com/public/frontEnd/footer/appStore.png" />

                                    </div>
                    </div>
          </div>

          <div className='col-md-4 opening'>
              <img src={image10} alt='' style={{height:'350px'}}/>
          </div>

</div>
    </div>
  )
}
