import * as C from "./styles";
import { useTheme } from "../../hooks/useTheme";
import cartBlack from "../../assets/cart-black.png";
import cartWhite from "../../assets/cart-white.png";
import { useCartContext } from "../../hooks/useCartContext";

export const Cart = () => {
  const { isDarkTheme } = useTheme();
  const { toggleCart } = useCartContext();

  return (
    <C.Cart title="Carrinho de compras" onClick={toggleCart}>
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
