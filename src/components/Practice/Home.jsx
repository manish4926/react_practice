//Core
//import {HeaderChild} from './components/children/HeaderChild';

import HelloMessage from 'components/Practice/HelloMessage';
// --------------
import TODOUseRef from 'components/Practice/TODO/Home';

// --------------
import TODOUseState from 'components/Practice/TODOUseState/Home';

// --------------
import TODOUseContext from 'components/Practice/TODOContextApi/Home';


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
        <div className='container-fluid'>
            <div className='row'>
                <div className='col'>
                    <TODOUseContext toDoitems={toDoitems}></TODOUseContext> 
                </div>
            </div>
            <div className='row'>
            
                <div className='col'>
                    <TODOUseState toDoitems={toDoitems}></TODOUseState> 
                </div>
                <div className='col'>
                    <TODOUseRef toDoitems={toDoitems}></TODOUseRef>
                </div>
            </div>
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