import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import History from "./pages/History";
import Home from "./pages/Home";
import Repository from "./pages/Repository";

function App() {
  return (
    <div>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/history">History</Link>
      <Link to="/repository">Repository</Link>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/history" component={() => <History />} />
          <Route exact path="/repository" component={() => <Repository />} />
          <Route component={() => <div>Fage Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
