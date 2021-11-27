import { BrowserRouter, Route, Routes } from "react-router-dom";
import Article from "./pages/Article";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <>
      {/* Switch, exact 없어짐 */}
      {/* component -> element 로 변경 */}
      {/* Switch -> Routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/write" element={<Write />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/article/edit/:id" element={<Write />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
