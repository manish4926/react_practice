import { useState } from 'react';
import TODOHeading from 'components/Practice/TODOUseState/ToDoHeading';
import ListItems from 'components/Practice/TODOUseState/ListItems';
import AddItem from 'components/Practice/TODOUseState/AddItem';
import ErrorMessage from 'components/Core/ErrorMessage';
import 'assets/ToDo.css';


const Home = ({toDoitems}) => {

    const [task, setTask] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [newItem, setNewItem] = useState(toDoitems);
    

    const addNewItem = () =>  {
        if(task === "" || dueDate === "") {
            console.log(task,dueDate);
            alert('Invalid Value');
        } else {
            let newItemsArr = [...newItem,[task, dueDate]];
            setNewItem(newItemsArr);
        }
    }

    const addTaskName = (event) => {
        setTask(event.target.value);
    }

    const addDueDate = (event) => {
        setDueDate(event.target.value);
    }


    return (
        <>
        <div className='todoProject'>
        <TODOHeading></TODOHeading>
        <AddItem addNewItem={addNewItem} addTaskName={addTaskName} addDueDate={addDueDate}></AddItem>
        <ErrorMessage listItem={newItem} message="No Task for Today! Enjoy the Day"></ErrorMessage>
        <ListItems toDoList={newItem}></ListItems>
        </div>
        </>
    )
}

export default Home