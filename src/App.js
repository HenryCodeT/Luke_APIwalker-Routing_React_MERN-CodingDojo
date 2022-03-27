import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import PeoplePage from './components/PeoplePage/PeoplePage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/:personId"} render={(routeProps)=><PeoplePage {...routeProps}/>}/>
        <Route exact path={"/"} render={(routeProps)=><Home {...routeProps}/>}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
