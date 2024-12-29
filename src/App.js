import { useState } from "react";
import s from "./App.module.css";
import Header from "./Header";
import Content from "./Content";
import { pizza } from "./pizza";
function App() {
  const [data, useDate] = useState(pizza);
  const [cart, setCart] = useState([]);
  return (
    <>
      <Header cart={cart} />
      <div className={s.container}>
        <Content data={data} cart={cart} setCart={setCart} />
      </div>
    </>
  );
}

export default App;
