import * as React from "react";
import "./Booklist.css";
import cart from './cart.svg';
import cover from './cover.jpg';

const Booklist = () => {
  
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
        <main>
            <ul class="SG">
                <p>Here must be books from json file!!! See the js file!!!</p>
            </ul>
        </main>
    </div>
  );
}
export default Booklist