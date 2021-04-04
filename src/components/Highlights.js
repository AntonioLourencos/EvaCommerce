import { useState, useEffect } from "react";

import CardProduct from "./CardProduct";
import { Container } from "../styles/components/HighLights";
import api from "../services/api";

const Highlights = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await api.get(`category/${props.id}`);
      setProducts(response.data);
        console.log(response.data);
    }
    getProducts();
  }, [setProducts]);

  return (
    <Container>
      <div>
        <div className="bar" />
        <h1>Destaques em {props.tittle}</h1>
      </div>

    </Container>
  );
};

export default Highlights;
