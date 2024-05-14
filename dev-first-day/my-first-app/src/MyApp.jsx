import MyButton from "./MyButton";
import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Bem-vindo ao meu app</h1>

      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />
    </div>
  );
}
