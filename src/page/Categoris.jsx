import React from 'react'
import image1 from '../images/image1.webp'
import image2 from '../images/image2.webp'
import image3 from '../images/image3.webp'
import image4 from '../images/image4.webp'
import image5 from '../images/image5.webp'
import image6 from '../images/image6.webp'
import image7 from '../images/image7.webp'
import image8 from '../images/image8.webp'
import './Common.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TabTitle } from '../utils/FunctionTitle'

export const Categoris = () => {
  TabTitle('Amar Bazar | Category')
  return (
    <div style={{background:'#f2eeed',paddingTop:'20px'}}>
          <section className='category-product'>
                    <div className='container'>
                              <div className='section-title text-center'>
                                <>
                                        <h4>Category Product</h4>
                                        <hr />
                                        </>
                                        <p className='text-muted'>Choose your necessary products from this feature categories.</p>

                              </div>

                              <div className='row' style={{marginBottom:'5px'}}>
                                <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image1} alt='' style={{height:'100px'}}/>
                                        <p>Carrot</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image2} alt='' style={{height:'100px'}}/>
                                        <p>Clementine</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image3} alt='' style={{height:'100px'}}/>
                                        <p>Pineapple</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image4} alt='' style={{height:'100px'}}/>
                                        <p>Cranberries</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image5} alt='' style={{height:'100px'}}/>
                                        <p>Mango</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image6} alt='' style={{height:'100px'}}/>
                                        <p>Iglotex Cauliflower</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image7} alt='' style={{height:'100px'}}/>
                                        <p>Organic Bell Pepper</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                               <div className='col-lg-3' style={{marginBottom:'5px'}}>
                                  <div className='card border-0 shadow-sm catprod'>
                                    <div className='card-body catbod'>
                                        <img src={image8} alt='' style={{height:'100px'}}/>
                                        <p>Radicchio</p>
                                        <a href='' className='view-all-btn'>View All<ArrowForwardIcon/></a>
                                    </div>
                                 </div>
                               </div>

                              
                              </div>

                    </div>

          </section>


    </div>
  )
}
