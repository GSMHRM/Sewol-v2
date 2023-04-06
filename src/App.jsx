import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/세월호 영상" element={<Home />} />
        <Route path="/안전 교육 영상1" element={<Home />} />
        <Route path="/안전 교육 영상2" element={<Home />} />
        <Route path="/너를 보내고" element={<Home />} />
        <Route path="/천개의 바람이 되어" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
