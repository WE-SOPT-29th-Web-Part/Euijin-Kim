import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route component={() => <div>Fage Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
