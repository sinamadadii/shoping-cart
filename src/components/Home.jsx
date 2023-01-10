import React from 'react'
import { CartState } from '../context/Context';
import Filter from './Filter';
import SingleProducts from './SingleProducts';
import './styles.css';


const Home = () => {

    const { state: { products } } = CartState();
    console.log(products);


    return (
        <div className='home' >
            <Filter />
            <div className='productContainer' >
                {products.map((product) => {
                    return <SingleProducts product={product} key={product.id} />
                })}
            </div>
        </div>
    )
}

export default Home;