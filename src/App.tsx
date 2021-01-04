import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { EmailList } from "./EmailList";
import { Header } from "./Header";
import { Mail } from "./Mail";
import { Sidebar } from "./Sidebar";
import { SendMail } from "./SendMail";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";

export const App = () => {
  const sendMessageIsOpen = useSelector(
    (state: RootState) => state.mail.sendMessageIsOpen
  );
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Switch>
            <Route path="/mail">
              <Mail />
            </Route>
            <Route path="/">
              <EmailList />
            </Route>
          </Switch>
        </div>
        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
};
