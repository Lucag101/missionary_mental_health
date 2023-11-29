import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";
import Navbar from "../Home/Navbar";
import Resources from "../Home/Resources";
import Exercises from "../Home/Exercises";
import Analytics from "../Home/Analytics";


function App() {
  return (
    <Router basename="/">
      <div className="bg-gradient-to-b from-cyan-100 to-cyan-300">
        <div className="flex justify-center items-center h-screen text-blue-900">
          <div clasName="">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/exercises" element={<Exercises />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/resources" element={<Resources />} />
            </Routes>
          </div>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
