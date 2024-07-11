import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


//import Constants from './assets/Constants';
//import Home from './components/Practice/Home';

import Practice from 'components/Practice/Home';
import Toby from 'components/Toby/Home';
import SocialMedia from 'components/SocialMedia/Home';
import Myntra from 'components/Myntra/Home';
import JobPortal from 'components/JobPortal/Home';
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
    case 'Toby':
      ComponentToRender = Toby;
      break;
    case 'SocialMedia':
      ComponentToRender = SocialMedia;
      break;
    case 'Myntra':
      ComponentToRender = Myntra;
      break;
    case 'JobPortal':
      ComponentToRender = JobPortal;
      break;
    default:
      ComponentToRender = Dashboard;
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
