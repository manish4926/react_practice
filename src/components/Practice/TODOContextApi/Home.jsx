import { useState } from 'react';
import TODOHeading from 'components/Practice/TODOContextApi/ToDoHeading';
import ListItems from 'components/Practice/TODOContextApi/ListItems';
import AddItem from 'components/Practice/TODOContextApi/AddItem';
import ErrorMessage from 'components/Core/ErrorMessage';
import 'assets/ToDo.css';


const Home = ({toDoitems}) => {

    // const task = useRef("");
    // const dueDate = useRef("");
    const [newItem, setNewItem] = useState(toDoitems);
    

    const addNewItem = (task, dueDate) =>  {
        if(task === "" || dueDate === "") {
        alert('Invalid Value');
        } else {
            let newItemsArr = [...newItem,[task, dueDate]];
            setNewItem(newItemsArr);
        }
    }


    return (
        <>
        <div className='todoProject style2' >
        <TODOHeading></TODOHeading>
        <AddItem addNewItem={addNewItem}></AddItem>
        <ErrorMessage listItem={newItem} message="No Task for Today! Enjoy the Day"></ErrorMessage>
        <ListItems toDoList={newItem}></ListItems>
        </div>
        </>
    )
}

export default Home