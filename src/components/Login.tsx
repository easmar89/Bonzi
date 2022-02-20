import { useState } from "react";
import users from "../model/users";

export default function Login() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");

  function login(e: any) {
    e.preventDefault();
    let userExists = users.find((user) => user.username === username);
    let pass = users.find((user) => user.password === password);

    if (!userExists) {
      setError("User does not exist!");
    } else {
      if (userExists.password === password) {
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
        setError("");
      } else {
        setError("wrong password");
      }
    }
  }

  function logout(e: any) {
    e.preventDefault();
    setIsLoggedIn(false);
  }

  return (
    <div className="login">
      {!isLoggedIn ? (
        <>
          <form action="submit" onSubmit={(e) => login(e)}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className="btn">Login</button>
          </form>
          <div className="error">{error ? error : null}</div>
        </>
      ) : (
        <div className="welcome">
          <h2>Welcome back</h2>
          <button onClick={(e) => logout(e)}>Logout</button>
        </div>
      )}
    </div>
  );
}
