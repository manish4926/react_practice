import Result from "./Result";
import Buttons from "./Buttons";

import styles from "./Calculator.module.css";

const Calculator = () => {
    const ButtonContainer = [
        "AC",
        "BK",
        "+/-",
        "/",
        "7",
        "8",
        "9",
        "x",
        "4",
        "5",
        "6",
        "-",
        "1",
        "2",
        "3",
        "+",
        "%",
        "0",
        ".",
        "="
    ];

  return (
    <div className={styles.calculatorFrame}>
      <h3>System Calculator</h3>
        <Result></Result>
        <Buttons buttonContailer={ButtonContainer}></Buttons>
    </div>
  )
}

export default Calculator;
