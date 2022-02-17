import { useState } from "react";
import users from "../model/users";

export default function Login() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="login">
      {isLoggedIn ? (
        <form action="submit">
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button className="btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Login
          </button>
        </form>
      ) : (
        <div className="welcome">
          <h2>Hello Elie</h2>
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Logout</button>
        </div>
      )}
    </div>
  );
}
