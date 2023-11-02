import { useContext } from "react";

import { ProdutosContext } from "../contexts/ProdutosContext";

export function useProdutosContext() {
  const value = useContext(ProdutosContext);

  return value;
}
