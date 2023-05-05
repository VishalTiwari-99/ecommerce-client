import {React, useState} from 'react';
import Cart from '../Cart/Cart';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import "./Navbar.scss";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const[open, setOpen] = useState(false);
  const products = useSelector(state=>state.cart.products);

  return (
    <div className='navbar'>
        <div className="wrapper"> 
            <div className="left">
              <div className="item">
                <img src="/img/flag.png" alt="" />
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <span>IND</span>
                <KeyboardArrowDownIcon />
              </div>
              <div className="item">
                <Link className="link" to="products/2">Men</Link>
              </div>
              <div className="item">
                <Link className="link" to="products/1">Women</Link>
              </div>
              <div className="item">
                <Link className="link" to="products/3">Kids</Link>
              </div>
            </div>
            <div className="center">
              <Link className="link" to="/">WISHSTORE</Link>
            </div>
            <div className="right">
              <div className="item">
                <Link className="link" to="/">Home</Link>
              </div>
              <div className="item">
                <Link className="link" to="/">About</Link>
              </div>
              <div className="item">
                <Link className="link" to="/">Contact</Link>
              </div>
              <div className="item">
                <Link className="link" to="/">Store</Link>
              </div>
              <div className="icons">
                <SearchIcon/>
                <PersonOutlineOutlinedIcon />
                <FavoriteBorderOutlinedIcon />
                <div className="cartIcon" onClick={()=>setOpen(!open)}>
                  <ShoppingCartOutlinedIcon />
                  <span>{products.length}</span>
                </div>
              </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar