import * as React from "react";
import "./Booklist.css";
import cart from './cart.svg';
import cover from './cover.jpg';
import data from './books.json'

const Booklist = () => {
    const books = data.books;
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
                    {books.map((book) => (
                        <li class="sgLi">
                            <div class="box">
                                <img src={book.image} width="60"/>
                                <p class="alnleft"><b>{book.title}</b></p>
                                <p class="alnleft">{book.author}</p>
                                <p class = "alnleft"><b>{book.price}</b></p> 
                                <button><p>View</p></button>
                            </div>
                        </li>
                    ))}
                    <p>Here must be books from json file!!! See the js file!!!</p>
                </ul>
            </main>
        </div>
    );
}
export default Booklist