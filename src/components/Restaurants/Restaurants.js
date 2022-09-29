import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Fruits from '../Fruits/Fruits';
import './Restaurants.css'



const Restaurants = () => {

    const [cards, setCards] = useState([])

    // fake db generate

    useEffect(() => {
        fetch('fruits-data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    // event handle using remaining time

    const [remaining, setRemaining] = useState(0)
    const addToCart = (props) => {
        setRemaining(remaining + parseFloat(props))
    }





    // main dad of child :)
    return (
        <section>
            <div className='main-items'>
                <div className="head-items">
                    <div className="card-items">
                        <div className="company">
                            <img src={require('../../image/logo.jpg')} alt="" />
                            <h2>Green-Chill-Restaurants</h2>
                        </div>
                        <h4 id='select'>Select Fruits </h4>
                        <div className="fruits">
                            {
                                cards.map(card => <Fruits fruits={card} addToCart={addToCart}
                                />)
                            }
                        </div>
                    </div>
                </div>
                <div className="cart">
                    {
                        <Cart remaining={remaining} />
                    }
                </div>
            </div>
        </section>
    );
};

export default Restaurants;