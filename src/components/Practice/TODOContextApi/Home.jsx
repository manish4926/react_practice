import { useState } from 'react';
import TODOHeading from 'components/Practice/TODOContextApi/ToDoHeading';
import ListItems from 'components/Practice/TODOContextApi/ListItems';
import AddItem from 'components/Practice/TODOContextApi/AddItem';
import ErrorMessage from 'components/Core/ErrorMessage';
import 'assets/ToDo.css';

import { DataContext } from 'components/Practice/TODOContextApi/DataContext';


const Home = ({toDoitems}) => {

    // const task = useRef("");
    // const dueDate = useRef("");
    const [newToDoContextItem, setToDoContextItem] = useState(toDoitems);
    

    // const addNewItem = (task, dueDate) =>  {
    //     if(task === "" || dueDate === "") {
    //     alert('Invalid Value');
    //     } else {
    //         let newItemsArr = [...newItem,[task, dueDate]];
    //         setNewItem(newItemsArr);
    //     }
    // }


    return (
        <>
        <DataContext.Provider value={{newToDoContextItem, setToDoContextItem}}>
            <div className='todoProject style2' >
            <TODOHeading></TODOHeading>
            <AddItem></AddItem>
            <ErrorMessage listItem={newToDoContextItem} message="No Task for Today! Enjoy the Day"></ErrorMessage>
            <ListItems></ListItems>
            </div>
        </DataContext.Provider>
        </>
    )
}

export default Home