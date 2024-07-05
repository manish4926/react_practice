import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Constants from './assets/Constants';
//import Home from './components/Practice/Home';

import Practice from 'components/Practice/Home';
import MainHeader from 'components/Children/MainHeader';
import Dashboard from 'components/Dashboard';



//------
//-----------
function App() {
  let componentType = 'Practice';
  let ComponentToRender = null;
  switch (componentType) {
    case 'Dashboard':
      ComponentToRender = Dashboard;
      break;
    case 'Practice':
      ComponentToRender = Practice;
      break;
    default:
      ComponentToRender = Practice;
  }
  
  return (
    <>
    
    <MainHeader>

      <ComponentToRender />
    </MainHeader>

    </>
  );
}

export default App;
