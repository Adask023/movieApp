import { useThemeContext } from "../hooks/UseThemeContext";

export const ToogleThemeButton = () => {
  const { dark, toggleDark } = useThemeContext();

  console.log('render: ' + dark)
  return (
    <>
      <h1>{dark ? "🌙" : "🌞"}</h1>
      <button onClick={toggleDark}>Theme toggle</button>
    </>
  );
};
