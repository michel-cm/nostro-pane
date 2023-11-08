import * as C from "./styles";
import cadeira from "../../assets/products/cadeira.jpg";
import { BsX } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsDash } from "react-icons/bs";

import { useCartContext } from "../../hooks/useCartContext";

export const CartShop = () => {
  const { toggleCart, isCartOpen } = useCartContext();

  return (
    <div
      className={`${isCartOpen ? "overlay" : ""} `}
      onClick={(e) => {
        if (e.target.classList.contains("overlay")) {
          toggleCart();
        }
      }}
    >
      <C.Container className={`${isCartOpen ? "open" : ""} `}>
        <C.Header className="cart__header">
          <div className="cart__header__title">
            Seu carrinho tem{" "}
            <strong className="header__total-itens">5 itens</strong>
          </div>
          <button>
            <BsX size={32} color="#333" onClick={toggleCart} />
          </button>
        </C.Header>
        <C.Main>
          <C.Item>
            <img src={cadeira} alt="" />
            <C.Details>
              <C.Title>
                Novelo de Presunto, Queijo, Mostarda e Catupiry.
              </C.Title>
              <C.Price>
                <span>R$ 8.599,90</span>
                <C.Quantify>
                  <button className="sub">
                    <BsDash />
                  </button>
                  <span>1</span>
                  <button className="add">
                    <BsPlus />
                  </button>
                </C.Quantify>
              </C.Price>
            </C.Details>
          </C.Item>
          <C.Item>
            <img src={cadeira} alt="" />
            <C.Details>
              <C.Title>
                Novelo de Presunto, Queijo, Mostarda e Catupiry.
              </C.Title>
              <C.Price>
                <span>R$ 8.599,90</span>
                <C.Quantify>
                  <button className="sub">
                    <BsDash />
                  </button>
                  <span>1</span>
                  <button className="add">
                    <BsPlus />
                  </button>
                </C.Quantify>
              </C.Price>
            </C.Details>
          </C.Item>
        </C.Main>
        <C.Footer className="cart__footer">
          <C.Total>
            <span>Total:</span>
            <strong>R$ 10.681,60</strong>
          </C.Total>

          <C.BtnFinally>Finalizar compra</C.BtnFinally>
          <C.BtnContinueBuy onClick={toggleCart}>
            Continuar comprando
          </C.BtnContinueBuy>
        </C.Footer>
      </C.Container>
    </div>
  );
};
