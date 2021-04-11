import './App.css';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Homepage from './pages/HomePage/homepage.js';
import Aboutpage from './pages/aboutpage/aboutPage.js';
import Contactpage from './pages/contact/contact.js';
function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path={'/'} exact component={Homepage}/>
        <Route path={'/about'} component={Aboutpage}/>
        <Route path={'/contact'} component={Contactpage}/>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
