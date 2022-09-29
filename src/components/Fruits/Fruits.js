import { useEffect } from 'react';
import './Fruits.css'

const Fruits = (props) => {
    const { fruits, addToCart } = props;
    const { cooking, remaining, strMeal, strMealThumb, strInstructions } = fruits;
    const description = strInstructions.slice(0, 100) + "...";



    // click to change card button innerText 

    //  but i can't ;) 
    useEffect(() => {
        const btn = document.getElementById('btn-cart')
        btn.addEventListener('click', function () {
            btn.innerText = "ADDED";
            btn.style.backgroundColor = "green";
        })

    }, [])


    
    // all cards added in ui 
    return (
        <div>
            <div className="card">
                <div className="image">
                    <img src={strMealThumb} alt="" />
                </div>
                <h3>{strMeal}</h3>
                <p>{description}</p>
                <h5>Cooking Time: {cooking}</h5>
                <h5 className='extra-p'>Remaining Time: {remaining}s </h5>
                <div className="card-btn">
                    <button onClick={() => {
                        addToCart(remaining);
                    }
                    } className='btn-cart' id='btn-cart'>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default Fruits;