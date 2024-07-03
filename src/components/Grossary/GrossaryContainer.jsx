import {HeaderChild} from '../Children/HeaderChild';
import AddGrossary from './../Grossary/AddGrossary';
import ListItems from './../Grossary/ListItems';
import ErrorMessage from '../Core/ErrorMessage';



const GrossaryContainer = (props) => {
    return (
        <>
            <div className='grossaryList'>
            <HeaderChild>Grossary List</HeaderChild>
            <AddGrossary></AddGrossary>
            <ErrorMessage listItem={props.foodItems}></ErrorMessage>
            <ListItems foodItems={props.foodItems}></ListItems>
            
            </div>
        </>
    );
}
export default GrossaryContainer;