import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/세월호영상" element={<Home />} />
        <Route path="/안전교육영상1" element={<Home />} />
        <Route path="/안전교육영상2" element={<Home />} />
        <Route path="/너를보내고" element={<Home />} />
        <Route path="/천개의바람이되어" element={<Home />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
