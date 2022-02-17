import { useEffect } from "react";
import productsInterface from "../model/productsInterface";

interface Props {
  item: productsInterface;
  cart: object[];
  setCart: (val: any) => void;
}

export default function Product({ item, cart, setCart }: Props) {
  let localCart = localStorage.getItem("cart") || "[]";

  useEffect(() => {
    localCart = JSON.parse(localCart);
    if (localCart) {
      setCart(localCart);
    }
  }, []);

  function addToCart(item: productsInterface) {
    let cartCopy: any = [...cart];

    let existingItem = cartCopy.find((cartItem: any) => cartItem.id == item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cartCopy.push({ ...item, quantity: 1 });
    }

    setCart(cartCopy);
  }

  return (
    <div className="product">
      <img src={item.imgUrl} alt="bonsai" />
      <h3>{item.title}</h3>
      <p>${item.price}</p>
      <p>{item.description}</p>
      <p>Left in stock: {item.stock}</p>
      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}
