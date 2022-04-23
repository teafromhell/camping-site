import { Route, Routes } from 'react-router-dom';
import './App.scss';
import CampgroundsList from './Pages/CampgroundsList';
import WelcomePage from './Pages/WelcomePage';

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element= { <WelcomePage />}/>
       <Route path='/campgrounds' element= {<CampgroundsList/>}/>
     </Routes>
    </div>
  );
}

export default App;
