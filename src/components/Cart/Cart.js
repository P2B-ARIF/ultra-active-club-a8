import React, { useEffect } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'

const Cart = ({ remaining }) => {


    useEffect(() => {
        const newRemaining = remaining + " secounds"
        const remain = document.getElementById('remain');
        remain.innerText = newRemaining;
    }, [remaining])

    function breakTime(num) {
        const wait = document.getElementById('wait')
        wait.innerText = num + " seconds";


        let time = {};
       time = num;

       const getTime = localStorage.getItem('break')
       console.log(getTime);
        localStorage.setItem('break', JSON.stringify(time));
    }



    return (
        <div className='m-cart'>
            <div className="profile">
                <div className="c-image">
                    <img src={require('../../image/profile-pic.jpeg')} alt="" />
                </div>
                <div className="name">
                    <h4>MD ARIF</h4>
                    <p><FontAwesomeIcon icon={faLocation} /> Chittagong, Bangladesh</p>
                </div>
            </div>
            <div className="self-details">
                <div>
                    <h3>75<sub>kg</sub> </h3>
                    <span>Weight</span>
                </div>
                <div>
                    <h3>6.5<sub>kg</sub> </h3>
                    <span>Height</span>
                </div>
                <div>
                    <h3>22<sub>yrs</sub> </h3>
                    <span>Age</span>
                </div>
            </div>
            <h3>Add A Break</h3>
            <div className="timer">
                <span onClick={() => breakTime(10)}>10s</span>
                <span onClick={() => breakTime(20)}>20s</span>
                <span onClick={() => breakTime(30)}>30s</span>
                <span onClick={() => breakTime(40)}>40s</span>
                <span onClick={() => breakTime(50)}>50s</span>
            </div>
            <h3 id='h3'>Remaining Time</h3>
            <div className="count-down">
                <div className='count'>
                    <p>Remaining time </p>
                    <span id='remain' ></span>
                </div>
                <div className="count">
                    <p>Waiting time </p>
                    <span id='wait' >0 seconds</span>

                </div>
            </div>
            <div className="btn">
                <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cart;