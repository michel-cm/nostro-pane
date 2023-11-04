import * as C from "./styles";
import info from "../../assets/informacoes.svg";

export const Info = () => {
  return (
    <C.Info title="Informações sobre a padaria">
      <div>
        <img src={info} alt="Nostro Pane" />
      </div>
    </C.Info>
  );
};
