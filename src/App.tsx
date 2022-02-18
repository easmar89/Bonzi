import { useState, useEffect } from "react";
import productsInterface from "./model/productsInterface";
import data from "./model/data";
import users from "./model/users";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";

export default function App() {
  let [storedData, setStoredData] = useState(data);
  let [cart, setCart] = useState<object[]>([]);
  let [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("data")) {
      localStorage.setItem("data", JSON.stringify(storedData));
      setStoredData(JSON.parse(localStorage.getItem("data") || "[]"));
    } else {
      setStoredData(JSON.parse(localStorage.getItem("data") || "[]"));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function updateSearchValue() {}

  return (
    <>
      <header>
        <h1>Bonzi</h1>
        <Login />
      </header>
      <main>
        <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <div className="products">
          {storedData.map((plant: productsInterface, index: number) => {
            return <Product key={index} item={plant} cart={cart} setCart={setCart} />;
          })}
        </div>
        <div className="cart">
          <Cart cart={cart} setCart={setCart} />
        </div>
      </main>
    </>
  );
}
