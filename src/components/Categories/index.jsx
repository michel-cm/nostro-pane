import { useEffect } from "react";
import * as C from "./styles";

export const Categories = () => {
  function geraScrollHorizontal() {
    // Adicione um identificador à sua barra de rolagem
    const scrollbar = document.querySelector(".categories");

    // Detecte eventos de pressionar e soltar o mouse para permitir a rolagem
    let isDragging = false;

    scrollbar &&
      scrollbar.addEventListener("mousedown", () => {
        isDragging = true;
      });

    scrollbar &&
      document.addEventListener("mouseup", () => {
        isDragging = false;
      });

    // Adicione um ouvinte de movimento do mouse para rolar o conteúdo
    document.addEventListener("mousemove", (e) => {
      if (isDragging) {
        const categories = document.querySelector(".categories");
        categories.scrollLeft += e.movementX;
      }
    });
  }

  useEffect(() => {
    geraScrollHorizontal();
  }, []);

  function handleClickGoToCategory() {
    const items = document.querySelectorAll(".teste");

    items.forEach(function (item) {
      item.addEventListener("click", function () {
        console.log("Clicked:", item.textContent);

        // Remove a classe 'category-active' de todos os elementos
        items.forEach(function (i) {
          i.classList.remove("category-active");
        });

        // Adiciona a classe 'category-active' apenas ao item clicado
        item.classList.add("category-active");

        item.scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }

  useEffect(() => {
    handleClickGoToCategory();
  }, []);

  function goToCategoryWhitId(targetId) {
    // Encontre o elemento alvo com o ID especificado
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Role até o elemento alvo
      targetElement.scrollIntoView({
        behavior: "smooth",
      });

      // Adicione a classe 'category-active' apenas ao item clicado
      targetElement.classList.add("category-active");

      // Remova a classe 'category-active' de todos os outros elementos
      const items = document.querySelectorAll(".teste");
      items.forEach(function (item) {
        if (item !== targetElement) {
          item.classList.remove("category-active");
        }
      });
    }
  }

  return (
    <C.Container>
      <h2>Produtos</h2>
      <div className="categories">
        <div className="teste category-active" id="lancamento">
          <span>Lançamento</span>
        </div>
        <div className="teste">
          <span>Kit do dia</span>
        </div>
        <div className="teste">
          <span>Delícias Mais Pedidas</span>
        </div>
        <div className="teste">
          <span>Promoção</span>
        </div>
        <div className="teste">
          <span>Dia dos Namorados</span>
        </div>
        <div className="teste">
          <span>Salgados</span>
        </div>
        <div className="teste">
          <span>Tortas</span>
        </div>
        <div className="teste testeGo" id="testeGo">
          <span>Pães</span>
        </div>
        <div className="teste" id="bolachas">
          <span>Bolachas e Cookies</span>
        </div>
        <div className="teste" id="bebidas">
          <span>Bebidas</span>
        </div>
      </div>

      {/* <button onClick={() => goToCategoryWhitId("lancamento")}>Go To Lancamento</button>
      <button onClick={() => goToCategoryWhitId("bolachas")}>Go To bolachas</button>
      <button onClick={() => goToCategoryWhitId("bebidas")}>Go To Bebidas</button> */}
    </C.Container>
  );
};
