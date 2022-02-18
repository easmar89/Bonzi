import { useState, useEffect } from "react";
import productsInterface from "../model/productsInterface";

interface Props {
  cart: object[];
  setCart: (val: any) => void;
}

export default function Cart({ cart, setCart }: Props) {
  function increaseQuantity(id: number) {
    let cartCopy = [...cart];
    let update: any = cartCopy.find((item: any) => item.id == id);

    if (update.quantity < update.stock) {
      update.quantity += 1;
    }

    setCart(cartCopy);
  }

  function decreaseQuantity(id: number) {
    let cartCopy = [...cart];
    let update: any = cartCopy.find((item: any) => item.id == id);

    if (update.quantity > 0) {
      update.quantity -= 1;
    }

    setCart(cartCopy);
  }

  function removeItem(id: number) {
    let cartCopy = [...cart];
    cartCopy = cartCopy.filter((item: any) => item.id != id);
    setCart(cartCopy);
  }

  let totalPrice: number = 0;
  cart.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <>
      <h2>Cart Items</h2>
      {cart.map((item: any) => {
        return (
          <section key={item.id}>
            <div className="cart-list">
              <h3>{item.title}</h3>
              <button className="control-btn" onClick={() => decreaseQuantity(item.id)}>
                -
              </button>
              <p>{item.quantity}</p>
              <button className="control-btn" onClick={() => increaseQuantity(item.id)}>
                +
              </button>
              <p>Left in stock: {item.stock - item.quantity}</p>
              <button className="btn" onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          </section>
        );
      })}
      <h2>{cart.length > 0 ? `Total price: $ ${totalPrice}` : null}</h2>
    </>
  );
}
