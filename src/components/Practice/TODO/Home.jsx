import { useState, useRef } from 'react';
import TODOHeading from 'components/Practice/TODO/ToDoHeading';
import ListItems from 'components/Practice/TODO/ListItems';
import AddItem from 'components/Practice/TODO/AddItem';
import ErrorMessage from 'components/Core/ErrorMessage';
import 'assets/ToDo.css';


const Home = ({toDoitems}) => {

    const task = useRef("");
    const dueDate = useRef("");
    const [newItem, setNewItem] = useState(toDoitems);
    

    const addNewItem = (event) =>  {
        console.log(event);
        if(task === "" || dueDate === "") {
        alert('Invalid Value');
        } else {
            let newItemsArr = [...toDoitems,[task, dueDate]];
            setNewItem(newItemsArr);
        }
    }


    return (
        <>
        <div className='todoProject'>
        <TODOHeading></TODOHeading>
        <AddItem addNewItem={addNewItem} addTaskName={task} addDueDate={dueDate}></AddItem>
        <ErrorMessage listItem={newItem} message="No Task for Today! Enjoy the Day"></ErrorMessage>
        <ListItems toDoList={newItem}></ListItems>
        </div>
        </>
    )
}

export default Home