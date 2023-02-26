import styles from "./Price.module.css";

export function Price() {
  return (
    <div className={styles.wrap}>
      <span className={styles.discountRate}>88%</span>
      <div className={styles.price}>
        <span className={styles.regular}>56,760원</span>
        <span className={styles.sale}>6,370원</span>
      </div>
    </div>
  );
}
