import {React} from 'react';
import Card from '../Card/Card';
import "./FeaturedProducts.scss";
import useFetch from '../../hooks/useFetch';
import CircularProgress from '@mui/material/CircularProgress';

// const data = [
//     {
//         id:1,
//         img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinyrgb&w=1600",
//         img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinyrgb&w=1600",
//         title: "Long Sleeve Graphic T-Shirt",
//         isNew: true,
//         oldPrice: 25,
//         price: 18,
//     },
//     {
//         id:2,
//         img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinyrgb&w=1600",
//         title: "Coat",
//         isNew: true,
//         oldPrice: 38,
//         price: 32,
//     },
//     {
//         id:3,
//         img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinyrgb&w=1600",
//         title: "Skirt",
//         oldPrice: 19,
//         price: 12,
//     },
//     {
//         id:4,
//         img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinyrgb&w=1600",
//         title: "Hat",
//         oldPrice: 19,
//         price: 12,
//     }
// ]

const FeaturedProducts = ({type}) => {
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
    

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita odit quos 
                similique pariatur officiis? Beatae, dolore? Dolorum rerum, minus reprehenderit 
                quod, unde ipsa dicta eius, fugiat mollitia sint odio aut.
            </p>
        </div>
        <div className="bottom">
            {error
                ? "Backend Rest Api error occured!"
                : loading
                ? <CircularProgress />
                : data.map(item => (<Card item={item} key={item.id}/>)
            )}
        </div>
    </div>
  )
}

export default FeaturedProducts