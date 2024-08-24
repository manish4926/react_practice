import styles from "./ListItem.module.css";
import { useContext } from 'react';
import { DataContext } from 'components/Practice/TODOContextApi/DataContext';

let ListItems = () => {
  const { newToDoContextItem } = useContext(DataContext);
  return (
    <>
      <div className="bh-item-list pb-2">
        <div className="container">
          <div className="row">
            {newToDoContextItem.map((item) => (
              <div className="row" key={item[0]}>
              <div  className="row" >
                <div className="col-5 pb-4">
                  <div className={`fw-bold ${styles.itemName}`}>{item[0]}</div>
                </div>
                <div className="col-5">
                  <div className="fw-normal">{item[1]}</div>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger" onClick={ () => { console.log(` ${item[0]} deleted`)}}>Delete</button>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListItems;
