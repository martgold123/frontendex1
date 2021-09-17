import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Home from "./page/home/Home";
import ColumnCharthome from "./page/columnChartHome/ColumnCharthome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/columnChart">
              <ColumnCharthome />
            </Route>

            <Route exact path="/LineChart">
              <Home />
            </Route>

            <Route exact path="/CircleChart">
              <ColumnCharthome />
            </Route>
          </Switch>
          <Sidebar />
        </div>
      </div>
    </Router>
  );
}

export default App;
