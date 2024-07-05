import styles from "./Calculator.module.css";

const Buttons = ({buttonContailer}) => {

    //console.log(buttonContailer);
  return (
    <div className={styles.Buttons}>
        {buttonContailer.map((buttonName) => (
            <button key={buttonName}>{buttonName}</button>
        ))}
    </div>
  )
}

export default Buttons