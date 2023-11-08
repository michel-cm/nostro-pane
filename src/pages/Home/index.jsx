import { Categories } from "../../components/Categories";
import * as C from "./styles";


export const Home = () => {

  return (
    <C.Container className="row">
      <Categories />
    </C.Container>
  );
};
