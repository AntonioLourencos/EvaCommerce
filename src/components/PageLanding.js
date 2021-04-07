import { useState, useEffect } from "react";

import {
  Container,
  Information,
  Banner,
  Categories,
} from "../styles/components/PageLanding";

import LockIcon from "@material-ui/icons/Lock";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import Item_1_Img from "../assets/images/banner.jpeg";

import category1 from "../assets/images/category-1.jpeg";
import category2 from "../assets/images/category-2.jpeg";
import category3 from "../assets/images/category-3.jpeg";


export const PageLanding = () => {
  let [current, setCurrent] = useState(0);
  const [currentTittle, setCurrentTittle] = useState();
  const [currentSubtittle, setCurrentSubtittle] = useState();
  const [currentImg, setCurrentImg] = useState();

  const selects = Array(4).fill("");
  const slideContent = {
    0: {
      tittle: "Seus livros Favoritos",
      subtittle: "estão te esperando aqui!",
      image: `${Item_1_Img}`,
    },
    1: {
      tittle: "Seus livros Favoritos 2",
      subtittle: "estão te esperando aqui! 2",
      image: `${Item_1_Img}`,
    },
    2: {
      tittle: "Seus livros Favoritos 3",
      subtittle: "estão te esperando aqui! 3",
      image: `${Item_1_Img}`,
    },
    3: {
      tittle: "Seus livros Favoritos 4",
      subtittle: "estão te esperando aqui! 4",
      image: `${Item_1_Img}`,
    },
  };

  const HandleSelect = () => {
    changeSelect(current);
    setCurrentTittle(slideContent[current].tittle);
    setCurrentSubtittle(slideContent[current].subtittle);
    setCurrentImg(slideContent[current].image);
  };

  const changeSelect = (index) => {
    const selects = document.querySelectorAll(".select-item");
    selects.forEach((select) => {
      select.classList.remove("selected-item");
    });
    selects[index].classList.add("selected-item");
  };

  useEffect(() => {
    HandleSelect();
  });

  return (
    <Container>
      <Banner>
        <div className="container-slides">
          <div className="slide slide-visible">
            <img
              src={currentImg}
              alt={"Houve um erro, tente recargar a pagina."}
              className="slide-image"
            />
            <div className="slide-container-text">
              <span>{currentTittle}</span>
              <span>{currentSubtittle}</span>
            </div>
          </div>
        </div>
        <div className="select-slide">
          {selects.map((select, index) => {
            return (
              <span
                className={"select-item"}
                key={index}
                onClick={() => {
                  setCurrent(index);
                  changeSelect(index);
                }}
              ></span>
            );
          })}
        </div>
      </Banner>

      <Information>
        <div>
          <LockIcon />
          <span>Site Seguro</span>
        </div>

        <div className="Space" />

        <div>
          <CreditCardIcon />
          <span>Até 12x sem juros</span>
        </div>

        <div className="Space" />

        <div>
          <LocalShippingIcon />
          <span>Entrega para todo o Brasil</span>
        </div>
      </Information>

      <Categories>

        {/* Aqui podemos adicionar um Link, para uma roda, que redireciona 
        para uma pagina especifica da categoria.
        */}

        <div>
          <img src={category1} alt={"opss..."}/>
          <span>Livros</span>
        </div>
        <div>
          <img src={category2} alt={"opss..."}/>
          <span>Escritório</span>
        </div>
        <div>
          <img src={category3} alt={"opss..."}/>
          <span>Vestuário</span>
        </div>
      </Categories>
    </Container>
  );
};
