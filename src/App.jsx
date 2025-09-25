import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Browser from "./pages/browser";
import Home from "./pages/quiz1/home";
import Profile from "./pages/quiz1/profile";
import Hometown from "./pages/quiz1/hometown";
import LocalFood from "./pages/quiz1/local-food";
import TouristPlace from "./pages/quiz1/tourist-place";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Browser />} />
        <Route path="/quiz1" element={<Home />} />
        <Route path="/quiz1/profile" element={<Profile />} />
        <Route path="/quiz1/hometown" element={<Hometown />} />
        <Route path="/quiz1/local-food" element={<LocalFood />} />
        <Route path="/quiz1/tourist-place" element={<TouristPlace />} />
      </Routes>
    </Router>
  );
}

export default App;
