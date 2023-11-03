import { shade } from "polished";

import Switch from "react-switch";

import { useTheme } from "../../hooks/useTheme";

const ToggleTheme = () => {
  const { changeTheme, isDarkTheme } = useTheme();

  return (
    <Switch
      onChange={changeTheme}
      checked={isDarkTheme === "dark"}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      boxShadow={"0 2px 8px rgba(0, 0, 0, 0.4)"}
      activeBoxShadow={"0 0 2px 3px #D1AF8A"}
      handleDiameter={14}
      offHandleColor={"#F9F9F9"}
      offColor={shade(0.1, "#D1AF8A")}
      onColor={shade(0.2, "#222")}
    />
  );
};

export default ToggleTheme;
