import './App.css';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/homePage/homepage.js';
import Aboutpage from './pages/aboutpage/aboutPage.js';
import Contactpage from './pages/contact/contact.js';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path={'/ReactNewYorkTheme'}  component={Homepage}/>
        <Route path={'/ReactNewYorkTheme/about'} component={Aboutpage}/>
        <Route path={'/ReactNewYorkTheme/contact'} component={Contactpage}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
