import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Todolist from "./views/Todolist";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/to-do-list'>
          <Todolist />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
