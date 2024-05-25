import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HelloMessage from './components/HelloMessage';
// --------------
import TODOHeading from './components/TODO/ToDoHeading';
import ListItems from './components/TODO/ListItems';
import AddItem from './components/TODO/AddItem';
import "./assets/ToDo.css";
// -------------
import ClockHeading from './components/BharatClock/ClockHeading';
import ClockSlogan from './components/BharatClock/ClockSlogan';
import ClockTimer from './components/BharatClock/ClockTimer';
import "./assets/BharatClock.css";

//---------------
import Calculator from './components/Calculator/Calculator';

// -----------------------
import { toDoitems } from './assets/DataSets';

//------
function App() {

  return (
    <>
    <div className='text-center'>
      <h2>Hello World</h2>
      <HelloMessage></HelloMessage>
    </div>
    <hr></hr>
    <div className='todoProject'>
      <TODOHeading></TODOHeading>
      <AddItem></AddItem>
      <ListItems toDoList={toDoitems}></ListItems>
    </div>

    <div className='bharatClock'>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockTimer></ClockTimer>
    </div>

    <Calculator></Calculator>
    
    
    </>
  );
}

export default App;
