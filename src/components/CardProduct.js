import { useState, useEffect } from "react";
import { useCart } from "../context/Cart";
import { Container, Header, Body, Footer } from "../styles/components/CardProduct";
import StarRateIcon from "@material-ui/icons/StarRate";
const CardProduct = (props) => {
  const Stars = Array(5).fill("");
  const [rating, setRating] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(props.images);
    setRating(props.stars);
  }, []);

  const { cart, setCart } = useCart();

  return (
    <Container className="Container">
      <div className="Card-Container">
        <Header>
          {images.map((image, index) => {
            return <img className="img" key={index} src={image.path} alt={"opps..."} />;
          })}
        </Header>
        <Body>
          <span className="Tittle">{props.name}</span>
          <div className="stars">
            {Stars.map((star, k) => {
              const ratingValue = k + 1;
              const starColor = ratingValue <= rating ? "#ffc107" : "#e4e5e9";
              return (
                <StarRateIcon
                  key={k}
                  style={{ color: `${starColor}` }}
                  className="star"
                />
              );
            })}
          </div>
          <span className="Price">R$ {props.price}</span>
          <span className="promotionalPrice">R$ {props.promotionalPrice}</span>
        </Body>
        <Footer>
          <button
            onClick={() => {
              setCart(cart + 1);
            }}
          >
            Comprar
          </button>
        </Footer>
      </div>
    </Container>
  );
};

export default CardProduct;
