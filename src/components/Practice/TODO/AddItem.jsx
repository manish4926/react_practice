
let AddItem = ({addNewItem, addTaskName, addDueDate}) => {

  

  return (
    <div className="bh-add-item pb-4">
      <form>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <input type="text" className="form-control" name="taskName" placeholder="Name" ref="taskName"></input>

          </div>
          <div className="col-5">
          <input type="date" className="form-control" name="date" placeholder="Date On" ref="date"></input>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-warning" onClick={addNewItem}>Add Item</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddItem;
