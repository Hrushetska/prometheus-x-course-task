import React from "react";
import SignIn from "./components/SignIn";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import Specificbook from "./components/Specificbook";
import Booklist from "./components/Booklist";
import Basket from "./components/Basket";
import Cart from "./components/Cart";

  
function App() {
  return (
    <div>
    <Header/>
    <Cart/>
    <Footer/>
    </div>
  );
}
export default App;