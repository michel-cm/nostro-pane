import * as C from "./styles";
// import ToggleTheme from "../../components/ToggleTheme";
import { useTheme } from "../../hooks/useTheme";
import cartBlack from "../../assets/cart-black.png";
import cartWhite from "../../assets/cart-white.png";

import { MdEmojiFoodBeverage } from "react-icons/md";

const Header = () => {
  const { isDarkTheme } = useTheme();

  return (
    <C.Container className="column">
      <div className="row">
        <MdEmojiFoodBeverage
          size={38}
          color={isDarkTheme === "dark" ? "#408AAA" : "#C49C6B"}
        />
        <C.Cart>
          <div>
            <img
              src={isDarkTheme === "dark" ? cartWhite : cartBlack}
              alt="Sacola de compras"
            />
            <span>3</span>
          </div>
        </C.Cart>
      </div>
    </C.Container>
  );
};

export default Header;
