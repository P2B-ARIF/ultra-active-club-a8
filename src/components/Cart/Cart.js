import React, { useEffect } from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Cart = ({ remaining }) => {


    useEffect(() => {
        const newRemaining = remaining + " seconds"
        const remain = document.getElementById('remain');
        remain.innerText = newRemaining;
    }, [remaining])

    function breakTime(num) {
        const wait = document.getElementById('wait')
        wait.innerText = num + " seconds";
        console.log(num);
        // setItem localStorage

        localStorage.setItem('break', JSON.stringify(num));
    }

    // getItem localStorage
    useEffect(() => {
        const wait = document.getElementById('wait')
        const getBreakTime = localStorage.getItem('break')
        wait.innerText = getBreakTime === null ? 0 + " seconds" : getBreakTime + " seconds";
    },)


    // toast function 

    const notify = () => toast("Your Order Submitted....", { position: "top-center" });

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
                    <h3>6.5</h3>
                    <span>Height</span>
                </div>
                <div>
                    <h3>22<sub>yrs</sub> </h3>
                    <span>Age</span>
                </div>
            </div>

            {/* break section  */}

            <h3>Add A Break</h3>
            <div className="timer">
                <span onClick={() => breakTime(10)}>10s</span>
                <span onClick={() => breakTime(20)}>20s</span>
                <span onClick={() => breakTime(30)}>30s</span>
                <span onClick={() => breakTime(40)}>40s</span>
                <span onClick={() => breakTime(50)}>50s</span>
            </div>

            {/* remaining section */}
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
            {/* toast section  */}
            <div className="btn">
                <button onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Cart;