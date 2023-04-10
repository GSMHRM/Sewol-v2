import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import './App.css';
import Intro from "./pages/Intro";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
