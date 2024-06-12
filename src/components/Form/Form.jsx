import styles from "./Form.module.css";

const Form = () => {
  return (
    <form className={styles.form}>
      <label htmlFor="cardholder">
        CARD HOLDER NAME
        <input
          className={styles.long}
          type="text"
          name="cardholder"
          placeholder="e.g Jane Appleseed"
        />
      </label>

      <label htmlFor="cardNumber">
        CARD NUMBER
        <input
          className={styles.long}
          type="text"
          name="cardNumber"
          placeholder="e.g 12345 6789 000"
        />
      </label>

      <div className={styles.dcvc}>
        <label htmlFor="Exp">
          EXP.DATE
          <input
            className={styles.date1}
            type="text"
            name="Exp"
            placeholder="MM"
          />
        </label>


        <label htmlFor="">(MM/YY)
        <input
            className={styles.date}
            type="text"
            name="Exp"
            placeholder="YY"
          />
        </label>

        <label className={styles.CV} htmlFor="CVC">
          CVC
          <input
            className={styles.cvc}
            type="text"
            name="CVC"
            placeholder="e.g 123"
          />
        </label>
      </div>

      <button className={styles.button}>Submit</button>
    </form>
  );
};

export default Form;
