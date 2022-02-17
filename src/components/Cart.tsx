import { useState, useEffect } from "react";

interface Props {
  cart: object[];
  setCart: (val: any) => void;
}

export default function Cart({ cart, setCart }: Props) {
  //   let [disabled, setDisabled] = useState(false);

  function increateQuantity(id: number) {
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
              <button className="control-btn" onClick={() => increateQuantity(item.id)}>
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
    </>
  );
}
