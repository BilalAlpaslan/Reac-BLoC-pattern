import { Route, Switch } from "react-router-dom";
import Article from './Pages/Articles'

export default function App() {
  return (
    <div>
      <Switch> 
        <Route path="/" exact                     component={Article} />
        {/* <Route path="/about"                      component={About} /> */}
      </Switch>
    </div>
  );
}

