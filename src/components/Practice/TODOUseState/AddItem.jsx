
let AddItem = ({addNewItem, addTaskName, addDueDate}) => {

  

  return (
    <div className="bh-add-item pb-4">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <input type="text" className="form-control" name="taskName" placeholder="Name" onChange={addTaskName}></input>

          </div>
          <div className="col-5">
          <input type="date" className="form-control" name="date" placeholder="Date On" onChange={addDueDate}></input>
          </div>
          <div className="col-2">
            <button className="btn btn-warning" onClick={addNewItem}>Add Item</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
