import * as C from "./styles";
// import ToggleTheme from "../../components/ToggleTheme";
import { Logo } from "../../components/Logo";
import { Info } from "../../components/Info";
import { Cart } from "../../components/Cart";

// import { MdEmojiFoodBeverage } from "react-icons/md";

const Header = () => {
  return (
    <C.Container className="column">
      <div className="row">
        {/* <MdEmojiFoodBeverage
          size={38}
          color={isDarkTheme === "dark" ? "#408AAA" : "#C49C6B"}
        /> */}
        <C.AreaLogo>
          <Logo />
          <C.titleLogo>Nostro Pane</C.titleLogo>
        </C.AreaLogo>
        <C.AreaIcons>
          <Info />
          <Cart />
        </C.AreaIcons>
      </div>
    </C.Container>
  );
};

export default Header;
