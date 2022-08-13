
import{Card} from 'react-bootstrap'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Common.css'
import {
  Button,
  CardActions,
  
} from "@material-ui/core";
import {incrementCounter,incrementFav} from '../Service/Action/Action'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useDispatch,useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Modal from 'react-bootstrap/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Rating } from 'react-simple-star-rating'


export const Products = () => {

  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

  const domain = "https://availtrade.com/public/images/";
  const [Products, setProducts] = useState(null);


  const [show, setShow] = useState(false);
  const[prod,setProd]=useState(null)
  console.log(prod,'========')

  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);
  const handleShow=(prod)=>{
    setProd(prod)
    handleModal()


  }
  
  const notify = () =>   toast.success("product add to cart!", {
    position: toast.POSITION.TOP_CENTER
  });
 
 

  const dispatch=useDispatch()
  const product=useSelector(state=>state.product)
  

  const addToCart =(product)=>{
    dispatch(incrementCounter(product))
    notify()
   }

   const addFav =()=>{
    dispatch(incrementFav())
   }

  localStorage.setItem("cartdata", JSON.stringify(product));
  
    useEffect(() => {
       const getAutomobile = async () => {
         await axios({
          //  url: `https://availtrade.com/api/homejustforproduct`,
          url: `https://idbdev.com/motion2/public/api/product-is-here-caught-me`,
           method: "GET",
         })
           .then((response) => {
             console.log(response?.data?.data,'categpory data==========');
             setProducts(response?.data?.data);
           })
           .catch((error) => {
             console.log("CategoryProduct", error);
           });
       };
       getAutomobile();
     }, []);

  return (
   
    <div style={{background:'#faf1f0',paddingTop:'20px'}}>
       
   
              <div className='container'>
                    <div className='section-title text-center'>
                              <h4>Popular Products for Daily Shopping</h4>
                              <hr />
                              <p className='text-muted'>See all our popular products in this week. You can choose your daily<br/> needs products from this list and get some special offer with free<br/> shipping..</p>

                    </div>

              </div>

    <div >

           {
                Products?.map((item,i) =>  
        <div className="row" style={{ display: 'inline-block' }} key={i}>

          <div className="col-md-3">
          <Card className='shadow inner' style={{ width: '18rem',height:'280px' ,marginLeft:'15px',marginBottom:'5px'}}>
          <Card.Body>
          <div className=''>
            <Card.Img variant="top" src={`https://idbdev.com/motion2/public/images/${item?.image}`} style={{height:'120px',pointer:'cursor'}} alt='' onClick={()=>handleShow(item)}/>
            <ToastContainer/>
            </div>
            <Card.Text>

             {/* <h6 style={{fontSize:'15px',paddingRight:'50px'}}> {item?.product_tags?.substring(0, 12)}</h6> 
             <p style={{paddingRight:'90px',fontSize:'14px',}}><span style={{color:'red',fontSize:'4px'}}><CurrencyRupeeIcon/></span>{item?.product_price}<span style={{color:'#ccc9c2',marginLeft:'12px',}}  onClick={()=>addToCart()}><FavoriteIcon /></span> </p> */}
             {/* <div className="star-rating"> 
              {[...Array(5)].map((star) => {        
                return (         
                  <span className="star" style={{color:'yellow',height:'40px',width:'40px'}}>&#9733;</span>        
                );
              })} 
            </div> */}

             <h6 style={{fontSize:'15px'}}> {item?.name}</h6> 
             <p style={{fontSize:'14px',}}><span style={{color:'red',fontSize:'4px'}}><CurrencyRupeeIcon/></span>{item?.regular_price}<span style={{color:'#d8c8db',marginLeft:'15px',}}  onClick={()=>addFav()}><FavoriteIcon /></span> </p>
             <CardActions style={{justifyContent: "center", }}>
            <Button variant="contained" color="secondary" style={{marginBottom:'10px'}} onClick={()=>addToCart(item)}>
            AddToCart
            </Button>
            </CardActions>
            </Card.Text>
          </Card.Body>
        </Card>
      
          </div>
       </div> 
                )
           }
      </div>


      
<div >
       <Modal show={show} onHide={handleClose}  >
        <Modal.Header closeButton>
        </Modal.Header>

        <div className='row showmodal'>
          <div className='col-md-5' >
            <img className='showimg' src={`https://idbdev.com/motion2/public/images/${prod?.image}`} style={{height:'250px',width:'240px',paddingLeft:'10px',marginTop:'50px',marginBottom:'30px'}}></img>
          </div>
          <div className='col-md-7'style={{marginTop:'15px',paddingLeft:'60px'}} >
            <h4 style={{color:'green'}}>{prod?.name.substring(0,14)}</h4>
            <Button variant="contained"  style={{background:'##91b39a',borderRadius:'50px'}}>in stock</Button>
            {/* <p style={{paddingRight:'10px'}}>{prod?.meta_description}</p> */}
            {/* <Rating onClick={handleRating} ratingValue={rating} /> */}
            <Rating onClick={handleRating} ratingValue={rating} />
            <p style={{fontSize:'25px'}}><b><CurrencyRupeeIcon/>{prod?.sale_price}</b></p>
            <Button variant="contained" color='primary' style={{justifyContent:'between' }} >
              <span>-</span><span style={{marginLeft:'4px',}}>{prod?.start_quantity?.substring(0,1)}</span><span style={{marginLeft:'4px',}}>+</span>
            </Button>

            {/* <div className='mt-5 d-flex justify-content-between align-item-center' style={{cursor:'pointer',background:'gray',width:'100px'}}> 
               <span style={{fontSize:'24'}}>-</span>
              <span style={{fontSize:'24'}}>{prod?.start_quantity}</span>
              <span style={{fontSize:'24'}}>+</span>

            </div> */}

            <Button variant="contained"  style={{marginLeft:'4px',background:'#1a913a'}} onClick={()=>addToCart(prod)}>Add Cart</Button>
            <p style={{marginTop:'4px',fontSize:'20px'}}>Unit:{prod?.unit_name}</p>

         
          </div>


          </div>
       </Modal>  
       </div>

    </div>
  )
}
