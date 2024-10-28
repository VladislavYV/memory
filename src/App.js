import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FirstPage } from "./pages/FirstPage/FirstPage";
import { GamePage } from "./pages/GamePage/GamePage";
import { Header } from "./components/header/Header";
import { Grid } from "./components/grid/Grid";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage/>}/>
          <Route path="/gamepage" element={<GamePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
