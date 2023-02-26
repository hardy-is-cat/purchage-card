import { useState } from "react";
import "./App.css";
import "./reset.css";
import { Counter, Delivery, Price, Result, Thumnail } from "./components/index";

function App() {
  const [count, setCount] = useState(0);
  const price = 6370;

  function minus() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function plus() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <Thumnail />
      <Price />
      <Delivery />
      <Counter minus={minus} plus={plus} count={count} />
      <Result count={count} price={price} />
    </div>
  );
}

export default App;
