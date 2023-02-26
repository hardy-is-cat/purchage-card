import React from "react";
import styles from "./Counter.module.css";

export function Counter(props) {
  console.log(props);

  return (
    <div className={styles.counter}>
      <div className={styles.counterWrap}>
        <button
          type="button"
          className={styles.minusButton}
          onClick={props.minus}
        >
          -
        </button>
        <output className={styles.output}>{props.count}</output>
        <button
          type="button"
          className={styles.plusButton}
          onClick={props.plus}
        >
          +
        </button>
      </div>
    </div>
  );
}
