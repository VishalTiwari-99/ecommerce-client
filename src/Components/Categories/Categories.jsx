import React from 'react';
import "./Categories.scss";
import {Link} from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/3812433/pexels-photo-3812433.jpeg?auto=compress&cs=tinyrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinyrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Women</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/16435819/pexels-photo-16435819.jpeg?auto=compress&cs=tinyrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">New Season</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinyrgb&w=1600" alt="" />
                        <button>
                            <Link className='link' to="/products/1">Men</Link>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <img src="https://images.pexels.com/photos/5655004/pexels-photo-5655004.jpeg?auto=compress&cs=tinyrgb&w=1600" alt="" />
                        <button>
                            <Link className='link' to="/products/1">Accessories</Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <img src="https://images.pexels.com/photos/2529157/pexels-photo-2529157.jpeg?auto=compress&cs=tinyrgb&w=1600" alt="" />
                <button>
                    <Link className='link' to="/products/1">Shoes</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Categories