import "./ListItem.module.css";

let ListItems = ({toDoList}) => {
  return (
    <>
    {toDoList['length'] === 0 && <h3 className="text-center">You have an empty list</h3>}
      <div className="bh-item-list pb-2">
        <div className="container">
          <div className="row">
            {toDoList.map((item) => (
              <div className="row" key={item[0]}>
              <div  className="row" >
                <div className="col-5 pb-4">
                  <div className="fw-bold {{item-name}}">{item[0]}</div>
                </div>
                <div className="col-5">
                  <div className="fw-normal">{item[1]}</div>
                </div>
                <div className="col-2">
                  <button className="btn btn-danger">Delete</button>
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
