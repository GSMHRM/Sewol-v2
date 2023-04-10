import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import './App.css';
import Sewol from "./pages/Sewol";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/sewol" element={<Sewol />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
