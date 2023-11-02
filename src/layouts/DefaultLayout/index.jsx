import { Outlet } from "react-router-dom";
import * as C from "./styles";
import "react-toastify/dist/ReactToastify.css";

export function DefaultLayout() {
  return (
    <C.LayoutContainer>
      <Outlet />
    </C.LayoutContainer>
  );
}
