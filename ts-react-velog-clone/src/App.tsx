import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./libs/utils/ScrollToTop";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/write" element={<Write />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/article/edit/:id" element={<Write />} />
            <Route path="/*" element={<Home />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
