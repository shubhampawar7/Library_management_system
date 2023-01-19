import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route , Routes, Switch  } from 'react-router-dom';


function App() {
  return ( 

    <Router>
      <div className='App'>
      <Navbar />
      <switch>
        <Routes>
        <Route exact path='/home'  component={Home}/>
        <Route exact path='/login'  component={Login}/>


        </Routes>

      </switch>



      </div>


    </Router>  
    
  );
}

export default App;
