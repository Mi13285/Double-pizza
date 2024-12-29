import { useState } from "react";
import s from "./App.module.css";
import Header from "./Header";
import Content from "./Content";
import { pizza } from "./pizza";
function App() {
  const [data, useDate] = useState(pizza);
  return (
    <div className={s.container}>
      <Header />
      <Content data={data} />
    </div>
  );
}

export default App;
