import styles from "./Result.module.css";

export function Result(props) {
  return (
    <>
      <div className={styles.wrap}>
        <span className={styles.title}>총 상품 금액</span>
        <p className={styles.price}>
          <span className={styles.value}>총 수량 {props.count}개</span>
          {(props.price * props.count).toLocaleString()}원
        </p>
      </div>
      <button
        type="submit"
        disabled={props.count > 0 ? false : true}
        className={styles.paymentButton}
      >
        구매하기
      </button>
    </>
  );
}
