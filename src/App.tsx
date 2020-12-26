import { Switch } from "@material-ui/core";
import { Route } from "react-router-dom";
import "./App.css";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route path="/mail">メール</Route>
          <Route path="/">メール</Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
