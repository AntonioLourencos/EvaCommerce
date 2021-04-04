import { useState, useEffect } from "react";

import { PageLanding } from "../components/PageLanding";
import Highlights from "../components/Highlights";
import api from "../services/api";

export const Main = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("categories");
      setCategories(response.data);
      console.log(categories);
    }
    getCategories();
  }, [setCategories]);

  return (
    <>
      <PageLanding />
      {categories.map((categorie, index) => {
        return <Highlights key={index} tittle={categorie.name} ID={categorie.id}/>;
      })}
    </>
  );
};
