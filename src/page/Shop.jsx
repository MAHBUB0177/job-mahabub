
import{Card} from 'react-bootstrap'
import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './Common.css'
import {
  Button,
  CardActions,
  IconButton,
  
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
import StarIcon from '@mui/icons-material/Star';

export const Shop = () => {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // other logic
  }

  const [Products, setProducts] = useState(null);
  const [show, setShow] = useState(false);
  const[prod,setProd]=useState(null)
  const [count,setCount]=useState(0)

  const handleClose = () => setShow(false);
  const handleModal = () => setShow(true);
  const handleShow=(prod)=>{
    setProd(prod)
    handleModal()


  }
  
  const notify = () =>   toast.success("product add to cart!", {
    position: toast.POSITION.TOP_CENTER
  });

  const handelDecrement=(item_id)=>{
    setCount(count-1)
    console.log('test')
    setProducts(Products=>
      Products.map((item)=>
      item_id === item.id ? {...item, product_qty:item.product_qty - 1 } : item
      ) )


  }

  const handelincrement=(item_id)=>{
    setCount(count+1)
    console.log(item_id)
    setProducts(Products=>
      Products.map((item)=>
      item_id === item.id ? {...item, product_qty:item.product_qty + 1 } : item
      ) )
    
  }
 
 

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
          url: `https://idbdev.com/motion2/public/api/product-is-here-caught-me`,
           method: "GET",
         })
           .then((response) => {
             console.log(response?.data?.data,'categpory data--------');
             setProducts(response?.data?.data);
           })
           .catch((error) => {
             console.log("CategoryProduct", error);
           });
       };
       getAutomobile();
     }, []);

  
 
 
  return (
    <div  style={{background:'#f2eeed'}}>

<div className='container'>
                    <div className='section-title text-center'>
                              <h4>Latest Discounted Products</h4>
                              <hr />
                              <p className='text-muted'>See Our latest discounted products below. Choose your daily needs <br/>from here and get a special discount with free shipping.</p>

                    </div>

              </div>

    <div >

           {
                Products?.map((item,i) =>  
        <div className="row" style={{ display: 'inline-block' }} key={i}>

          <div className="col-md-3">
          <Card className='shadow inner' style={{ width: '18rem',height:'280px' ,marginLeft:'15px',marginBottom:'7px'}}>
          <Card.Body>
          <div className=''>
            <Card.Img variant="top" src={`https://idbdev.com/motion2/public/images/${item?.image}`} style={{height:'120px',pointer:'cursor',width:'100%'}} alt='' onClick={()=>handleShow(item)}/>
            <ToastContainer/>
            </div>
            <Card.Text>
             <h6 style={{fontSize:'20px',color:''}}> {item?.name?.substring(0, 12)}</h6> 
             <p style={{fontSize:'14px',}}><span style={{color:'red',fontSize:'25px',marginRight:'75px'}}><CurrencyRupeeIcon/>{item?.regular_price}</span><span style={{color:'#d8c8db',marginLeft:'35px',}}  onClick={()=>addFav()}><FavoriteIcon /></span> </p>
             <CardActions style={{justifyContent: "center", }}>
            <Button variant="contained" color="secondary" style={{marginBottom:'10px'}} onClick={()=>addToCart(item)}>
            AddToCart
            </Button>
            {/* <div className='input-group' style={{width:'150px'}}>
              <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>handelincrement(item.id)}>+</button>
              <div className='form-control text-center' style={{width:'15px'}}>{count}</div>
              <button type='button' className='input-group-text' style={{width:'15px'}} onClick={()=>handelDecrement(item.id)}>-</button>
            </div> */}
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
            <br/>
            <span>
            <p style={{paddingRight:'10px',fontSize:'25px'}}>Rating:{prod?.rating?.rate}<span style={{color:'goldenrod'}}><StarIcon/><StarIcon/><StarIcon/></span></p>
            </span>
            <p style={{fontSize:'25px',color:'tomato'}}><b><CurrencyRupeeIcon/>{prod?.regular_price}</b></p>
            
            <Button variant="contained"  style={{marginLeft:'4px',background:'#1a913a'}} onClick={()=>addToCart(prod)}>Add Cart</Button>
          </div>


          </div>
       </Modal>  
       </div>

    </div>
  )
}
