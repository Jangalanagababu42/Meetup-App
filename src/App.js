import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  return (
    <div className="App mx-4 bg-bgwhite">
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/event" element={<EventDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
