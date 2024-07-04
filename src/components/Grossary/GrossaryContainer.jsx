import {HeaderChild} from '../Children/HeaderChild';
import AddGrossary from './../Grossary/AddGrossary';
import ListItems from './../Grossary/ListItems';
import ErrorMessage from '../Core/ErrorMessage';
import { useState } from 'react';



const GrossaryContainer = (props) => {
    const [newItem, setNewItem] = useState(""); //Initial Value
    const [foodItems, setFoodItems] = useState(props.foodItems); //Initial Value

    const AddItemToList = (event) => {
        if(event.key === "Enter") {
            let newValue = event.target.value;
            setNewItem(newValue);
            let newItems = [...foodItems , newValue];
            setFoodItems(newItems);
            event.target.value = "";
        }
        
    }

    return (
        <>
            <div className='grossaryList'>
            <HeaderChild>Grossary List</HeaderChild>
            <AddGrossary AddItemToList={AddItemToList}></AddGrossary>
            <ErrorMessage listItem={foodItems}></ErrorMessage>
            <p>{newItem}<code> [Press Enter to Submit]</code></p>
            <ListItems foodItems={foodItems}></ListItems>
            
            </div>
        </>
    );
}
export default GrossaryContainer;