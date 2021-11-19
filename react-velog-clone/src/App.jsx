import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./libs/utils/ScrollToTop";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Switch>
            <Route exact path="/write" component={() => <Write />} />
            <Route path="/article/:id" exact component={() => <Article />} />
            <Route path="/article/edit/:id" exact component={() => <Write />} />
            <Route path="/" component={() => <Home />} />
            <Route component={() => <div>Page Not Found</div>} />
          </Switch>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
