import * as C from "./styles";
import { useTheme } from "../../hooks/useTheme";
import cartBlack from "../../assets/cart-black.png";
import cartWhite from "../../assets/cart-white.png";

export const Cart = () => {
  const { isDarkTheme } = useTheme();

  return (
    <C.Cart title="Carrinho de compras">
      <div>
        <img
          src={isDarkTheme === "dark" ? cartWhite : cartBlack}
          alt="Sacola de compras"
        />
        <span>3</span>
      </div>
    </C.Cart>
  );
};
