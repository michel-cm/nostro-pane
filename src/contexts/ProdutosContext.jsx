import { useState, useEffect, useCallback, createContext } from "react";
import { v1 as uuidv1 } from "uuid";

export const ProdutosContext = createContext({});

// import { Api } from "../services/Api";
import { produtos } from "../helpers/products.js";

export function ProdutosContextProvider({ children }) {
  const [products, setProducts] = useState([]);

  const getAllProds = useCallback(async () => {
    // await Api.getAllProducts().then((data) => {
    //   setProducts(data);
    // });
    setProducts(produtos);
  }, [setProducts]);

  const addNewProd = async (prod) => {
    // const newProdForAdd = { id: uuidv1(), ...prod };
    // await Api.addNewProduct(newProdForAdd).then(() => {
    //   setProducts((state) => [newProdForAdd, ...state]);
    // });
  };

  const deleteProd = async (idProd) => {
    // await Api.deleteProduct(idProd).then(() => {
    //   setProducts((state) => state.filter((prod) => prod.id !== idProd));
    // });
  };

  const updateProd = async (idProd, updatedProd) => {
    // await Api.updateProduct(idProd, updatedProd).then(() => {
    //   setProducts((prevProducts) => {
    //     const updatedProducts = prevProducts.map((prod) =>
    //       prod.id === idProd ? updatedProd : prod
    //     );
    //     return updatedProducts;
    //   });
    // });
  };

  useEffect(() => {
    if (products.length === 0) {
      getAllProds();
    }
  }, [getAllProds, products]);

  return (
    <ProdutosContext.Provider
      value={{ products, addNewProd, deleteProd, updateProd }}
    >
      {children}
    </ProdutosContext.Provider>
  );
}
