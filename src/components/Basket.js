import * as React from "react";
import "./Basket.css";
import cart from './cart.svg';
import cover from './cover.jpg';

const Basket = () => {
  
  return (
    <div>
         <hr />
            <header>
            <h3>JS BAND STORE/Your full name </h3>
                <nav>
                    <img src={cart} width="50" alt="Cart" />
                    <button><h3>Sign-Out</h3></button>
                    <span>&nbsp;</span>
                    <img class="img-circle" />
                    <span>Username</span>
                </nav>
            </header>
        <hr />
        <div class="rightbottom">
            <button><h3>Purchase</h3></button>
        </div>
        <div class="img">
            <img src={cart} width="200" alt="Cart" />
        </div>

    </div>
  );
}
export default Basket