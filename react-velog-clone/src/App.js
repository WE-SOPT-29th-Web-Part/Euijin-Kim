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
          <Route exact path="/series/:id" component={() => <Series />} />
          <Route exact path="/write" component={() => <Write />} />
          <Route path="/" component={() => <Main />} />
          {/* 중첩 라우팅을 위해 exact 제거 / 무조건 / 로 라우팅되는 것을 방지하기 위해 밑으로 내림. */}
          <Route exact path="/:id" component={() => <Article />} />
          <Route exact path="/:id/edit" component={() => <Write />} />
          <Route component={() => <div>Fage Not Found</div>} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
