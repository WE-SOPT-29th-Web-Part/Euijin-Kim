import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/write" exact component={() => <Write />} />
          <Route path="/" component={() => <Home />} />
          <Route component={() => <div>Page Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
