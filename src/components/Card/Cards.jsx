import Front from "../../assets/bg-card-front.png";
import Back from "../../assets/bg-card-back.png";
import cardLogo from "../../assets/card-logo.svg";
import styles from "./Card.module.css";

const Cards = () => {
  return (
    <div>
      <div className={styles.fContainer}>
        <img className={styles.front} src={Front} alt="" />
        <img className={styles.cardLogo} src={cardLogo} alt="" />
      </div>

      <img className={styles.back} src={Back} alt="" />
    </div>
  );
};

export default Cards;
