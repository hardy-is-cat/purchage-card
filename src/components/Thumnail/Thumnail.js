import thum from "../../assets/img_thum.jpg";
import styles from "./Thumnail.module.css";

export function Thumnail() {
  return (
    <>
      <img
        src={thum}
        className={styles.thumnail}
        alt="래피젠 코로나 자가 검사 키트"
      />
      <h2 className={styles.title}>
        래피젠 코로나 자가 검사 키트
        <br />
        2개입X1박스
      </h2>
    </>
  );
}
