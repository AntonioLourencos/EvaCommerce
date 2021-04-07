import { useState, useEffect } from "react";

import CardProduct from "./CardProduct";
import { Container } from "../styles/components/HighLights";
import api from "../services/api";

const Highlights = (props) => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`category/${props.id}`);
      setproducts(response.data.product);
    }
    getProduct();
  }, []);

  return (
    <Container>
      <div>
        <div className="bar" />
        <h1>Destaques em {props.tittle}</h1>
      </div>
      <div className="cards">
        {products.map((product, index) => {
          return (
            <CardProduct
              key={index}
              images={product.images}
              price={product.price}
              promotionalPrice={product.promotional_price}
              stars={product.stars}
              name={product.name}
              className="card"
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Highlights;
