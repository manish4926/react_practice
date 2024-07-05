//Core
//import {HeaderChild} from './components/children/HeaderChild';

import HelloMessage from 'components/Practice/HelloMessage';
// --------------
import TODOHeading from 'components/Practice/TODO/ToDoHeading';
import ListItems from 'components/Practice/TODO/ListItems';
import AddItem from 'components/Practice/TODO/AddItem';
import './../../assets/ToDo.css';

// -------------
import ClockHeading from 'components/Practice/BharatClock/ClockHeading';
import ClockSlogan from 'components/Practice/BharatClock/ClockSlogan';
import ClockTimer from 'components/Practice/BharatClock/ClockTimer';
import "assets/BharatClock.css";

// --------------
import GrossaryContainer from 'components/Practice/Grossary/GrossaryContainer';



//---------------
import Calculator from 'components/Practice/Calculator/Calculator';




//---------------
import ChildrenExample from 'components/Practice/ChildrenExample';

import { toDoitems, foodItems } from 'assets/DataSets';


const Home = (props) => {
    //console.log(props);
    return (
        <>
        <div className='text-center'>
        <h2>Hello World</h2>
        <HelloMessage></HelloMessage>
        </div>
        
        {/* ----------------------GROSSARY-------------------- */}
        <hr></hr>
        <GrossaryContainer foodItems={foodItems}></GrossaryContainer>

        <hr></hr>
        <div className='todoProject'>
        <TODOHeading></TODOHeading>
        <AddItem></AddItem>
        <ListItems toDoList={toDoitems}></ListItems>
        </div>

        <div className='bharatClock col'>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <ClockTimer></ClockTimer>
        </div>

        <Calculator></Calculator>
        <ChildrenExample>
        <p>Hello Child Example. Here We Can Use Any Content Under Parent</p>
        </ChildrenExample>
        <ChildrenExample>
        <h2>Hello Child Example. Here We Can Use Any Content Under Parent</h2>
        </ChildrenExample>

        </>
    )
}

export default Home