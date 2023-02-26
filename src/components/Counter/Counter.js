import React from "react";
import styles from "./Counter.module.css";

export function Counter() {
  const [value, setCount] = React.useState(0);

  function minus() {
    if (value > 0) {
      setCount(value - 1);
    }
  }

  function plus() {
    setCount(value + 1);
  }

  return (
    <div className={styles.counter}>
      <div className={styles.counterWrap}>
        <button type="button" className={styles.minusButton} onClick={minus}>
          -
        </button>
        <output className={styles.output}>{value}</output>
        <button type="button" className={styles.plusButton} onClick={plus}>
          +
        </button>
      </div>
    </div>
  );
}
