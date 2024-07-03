import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//Core
//import {HeaderChild} from './components/children/HeaderChild';


import HelloMessage from './components/HelloMessage';
// --------------
import TODOHeading from './components/TODO/ToDoHeading';
import ListItems from './components/TODO/ListItems';
import AddItem from './components/TODO/AddItem';
import "./assets/ToDo.css";

// --------------
import GrossaryContainer from './components/Grossary/GrossaryContainer';


// -------------
import ClockHeading from './components/BharatClock/ClockHeading';
import ClockSlogan from './components/BharatClock/ClockSlogan';
import ClockTimer from './components/BharatClock/ClockTimer';
import "./assets/BharatClock.css";

//---------------
import Calculator from './components/Calculator/Calculator';


//---------------
import ChildrenExample from './components/ChildrenExample';


// -----------------------
import { toDoitems, foodItems } from './assets/DataSets';

//------
//-----------
function App() {

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
  );
}

export default App;
