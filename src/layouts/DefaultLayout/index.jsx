import { Outlet } from "react-router-dom";
import * as C from "./styles";
import "react-toastify/dist/ReactToastify.css";

import Header from "../../default/Header";
import { CartShop } from "../../default/CartShop";

export function DefaultLayout() {
  return (
    <C.LayoutContainer>
      <Header />
      <CartShop />
      <Outlet />
    </C.LayoutContainer>
  );
}
