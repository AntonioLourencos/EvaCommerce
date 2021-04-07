import { useState, useEffect } from "react";

import { PageLanding } from "../components/PageLanding";
import Loading from "../components/Loading";
import Highlights from "../components/Highlights";
import api from "../services/api";

export const Main = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCategories() {
      const response = await api.get("categories");
      setCategories(response.data);
      setLoading(false);
    }
    getCategories();
  }, []);

  return (
    <>
      <PageLanding />
      {loading ? (
        <Loading />
      ) : (
          categories.map((categorie, index) => {
          if (categorie.product.length === 0) {
            return null;
          } else if (categorie.product.length >= 4) {
            return <Highlights key={index} tittle={categorie.name} id={categorie.id} />;
          }
        })
      )}
    </>
  );
};
