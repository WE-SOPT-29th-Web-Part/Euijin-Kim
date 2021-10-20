import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import History from "./pages/History";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/history" component={() => <History />} />
          <Route component={() => <div>Fage Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
