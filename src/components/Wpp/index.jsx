import * as C from "./styles";
import { BsWhatsapp } from "react-icons/bs";

export const Wpp = () => {
  return (
    <C.Container
      href="https://api.whatsapp.com/send/?phone=553598707187&text&type=phone_number&app_absent=0"
      target="_blank"
      title="Acessar nosso whatsapp"
    >
      <BsWhatsapp size={22} color="#3EA36C" />
      <span>(35) 99870 - 7187</span>
    </C.Container>
  );
};
