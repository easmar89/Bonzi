import productsInterface from "../model/productsInterface";

interface Props {
  item: productsInterface;
}

export default function Product({ item }: Props) {
  return (
    <div className="product">
      <img src={item.imgUrl} alt="bonsai" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <button>Add to Cart</button>
    </div>
  );
}
