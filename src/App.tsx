import data from "./model/data";
import Product from "./components/Product";

export default function App() {
  return (
    <>
      <h1>Bonzi</h1>
      <div>
        {data.map((plant) => {
          return <Product item={plant} />;
        })}
      </div>
    </>
  );
}
