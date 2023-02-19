import * as React from "react";
import "./Basket.css";
import cart from './cart.svg';
import cover from './cover.jpg';

const Cart = () => {
  
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
        <table class="img">
            <tr>
                <td>
                <h3>Book namae</h3>
                </td>
                <td>
                <h3>Count</h3>
                </td>
                <td class="alnright">
                <h3>Total Price</h3>
                </td>                
            </tr>
            <tr>
                <td>
                <h3>Book namae</h3>
                </td>
                <td>
                <h3>Count</h3>
                </td>
                <td class="alnright">
                <h3>Total Price</h3>
                </td>                
            </tr>
            <tr>
                <td>
                <h3>Book namae</h3>
                </td>
                <td>
                <h3>Count</h3>
                </td>
                <td class="alnright">
                <h3>Total Price</h3>
                </td>                
            </tr>
            <tr>
                <td>
                <h3></h3>
                </td>
                <td>
                <h3></h3>
                </td>
                <td class="alnright">
                <h3>Total price,$ 103</h3>
                </td>                
            </tr>
        </table>
    </div>
  );
}
export default Cart