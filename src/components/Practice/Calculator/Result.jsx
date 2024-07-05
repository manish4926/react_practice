import styles from "./Calculator.module.css";

const Result = () => {
  return (
    <input className={styles.inputFrame} type="text" readOnly={true}></input>
  )
}
export default Result;