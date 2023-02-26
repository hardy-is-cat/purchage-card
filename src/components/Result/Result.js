import styles from "./Result.module.css";

export function Result() {
  return (
    <div className={styles.wrap}>
      <span>총 상품 금액</span>
      <p>
        총 수량 1개<span className="result-price">6,370원</span>
      </p>
    </div>
  );
}
