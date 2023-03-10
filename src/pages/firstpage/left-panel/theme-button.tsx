import useTheme from "../../../hooks/useTheme";

import { Props } from ".";

const ThemeButton: React.FC<Props> = ({ sendMessage }) => {
  const [theme, setTheme] = useTheme();

  const changeTheme = () => {
    const newTheme: string = toggleTheme();
    setTheme(newTheme);
    sendMessage(`Theme was set to ${newTheme}`);
  };

  const toggleTheme = () => {
    return theme === "Light" ? "Dark" : "Light";
  };

  return (
    <button className="theme-button" onClick={changeTheme}>
      Set {toggleTheme()} Theme
    </button>
  );
};

export default ThemeButton;
