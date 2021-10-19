import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Series from "./pages/SeriesCategory";
import Write from "./pages/Write";
import Article from "./pages/Article";
import SeriesCategory from "./pages/SeriesCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/series" component={() => <SeriesCategory />} />
          <Route exact path="/series/:id" component={() => <Series />} />
          <Route exact path="/write" component={() => <Write />} />
          <Route exact path="/:id" component={() => <Article />} />
          <Route exact path="/:id/edit" component={() => <Write />} />
          <Route component={() => <div>Fage Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
