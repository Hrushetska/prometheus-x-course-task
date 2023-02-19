import * as React from "react";
import "./SignIn.css";
import avatar from './avatar.png';

const SignIn = () => {
  
  return (
    <div>
    <hr />
    <h1>JS BAND STORE/Your full name</h1>
    <hr />
     <section class="avatar">
      <img src={avatar} alt="Avatar" width="160" height="160"/>
      <div>
            <h2>Username</h2>
        </div>
        <div>
            <input class="input" type="text" id="username" name="user_name"/>
        </div>
        <div>
            <button class="input" type="submit">Sign-In</button>
        </div>
    </section>
    </div>
  );
}
export default SignIn