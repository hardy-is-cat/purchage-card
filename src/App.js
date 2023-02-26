import "./App.css";
import "./reset.css";
// import Thumnail from "./components/Thumnail/Thumnail";
// import Counter from "./components/Counter/Counter";
// import Price from "./components/Price/Price";
// import Delivery from "./components/Delivery/Delivery";
// import Result from "./components/Result/Result";
import { Counter, Delivery, Price, Result, Thumnail } from "./components/index";

function PaymentButton() {
  return <button type="submit">구매하기</button>;
}

function App() {
  return (
    <div className="App">
      <Thumnail />
      <Price />
      <Delivery />
      <Counter />
      <Result />
      <PaymentButton />
    </div>
  );
}

export default App;
