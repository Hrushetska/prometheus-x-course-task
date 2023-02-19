import * as React from "react";
import "./Specificbook.css";
import cart from './cart.svg';
import cover from './cover.jpg';



const Specificbook = () => {
  
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
        <div class="row">
            <div class="column">
                <img src={cover} alt="Cover" width="150"/>
                <p>Book description</p>
            </div>
            <div class="column">
                <p><b>Book name:</b> Eloquent Javascript</p>
                <p><b>Book author:</b> Marijn Haverbake</p>
                <p><b>Book level:</b> Beginner</p>
                <p><b>Book tags:</b> core</p>
            </div>
            <div class="column" >
                <p>Price in $:</p>
                <label for="count">Count</label>
                <p>Total price</p>
                <p><b>Description:</b> A book providing an introduction to the JavaScript language and programmind in general.</p>
            </div>
            <div class="column" >
                <p id="price">52.72</p>
                <input type="number" min="1" step="1" id="count" name="user_count"/>
                <p>totalprice</p>
                <button type="submit">Add to cart</button>
            </div>
        </div>
    </div>
  );
}
export default Specificbook