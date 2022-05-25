import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm' ;
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route
  // Link
} from "react-router-dom";

function App() {
  const [alert , setAlert] = useState(null);

  // const [pageTitle , setPageTitle] = useState('textUtils - Home');

  const changeTitle = (pageName) => {
    document.title = 'textUtils - ' + pageName;
  }
  const showAlert = (message , type) => {
    setAlert({
      msg : message ,
      type : type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2250);
  }; 

  const [darkMode , setDarkMode] = useState(false);
  const toggleMode = () => {
    if(darkMode === false) {
      setDarkMode(true);
      document.body.style.backgroundColor = '#2e2d2d';
      showAlert("Dark Mode Enabled" , "success");
    }else {
      setDarkMode(false);
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled" , "success");
    }
  }

  return (
    <Router>
      <Navbar title = ".textUtils" mode={darkMode} toggleMode={toggleMode} pTitle = {changeTitle}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <Switch>
          <Route exact path="/about" element={<About mode={darkMode}/>}/>
          <Route exact path="/" element = {<TextForm showAlert={showAlert} heading = "Enter Text to be formated" mode={darkMode}/>}/>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
