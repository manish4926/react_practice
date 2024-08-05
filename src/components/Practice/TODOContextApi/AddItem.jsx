import { useRef } from 'react';

let AddItem = ({addNewItem}) => {

  const taskElement = useRef();
  const dueDateElement = useRef();

  const handleButtonClickEvent = (event) => {
    event.preventDefault();
    addNewItem(taskElement.current.value, dueDateElement.current.value);
  }

  return (
    <div className="bh-add-item pb-4">
      <form onSubmit={handleButtonClickEvent}>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <input type="text" className="form-control" name="taskName" placeholder="Name" ref={taskElement} />

          </div>
          <div className="col-5">
          <input type="date" className="form-control" name="date" placeholder="Date On" ref={dueDateElement} />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-warning">Add Item</button>
          </div>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AddItem;
