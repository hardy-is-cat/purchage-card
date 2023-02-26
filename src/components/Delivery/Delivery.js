import styles from "./Delivery.module.css";

export function Delivery() {
  return (
    <div className={styles.wrap}>
      <p className={styles.info}>
        택배배송 <span className={styles.price}>3,000원</span>
        <span className={styles.highlight}>(주문시 결제)</span>
      </p>
      <span className={styles.standard}>10개마다 부과</span>
    </div>
  );
}
