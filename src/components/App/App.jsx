import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../Home/HomePage";

function App() {
  return (
    <Router basename="/">
      <div className="bg-gradient-to-b from-cyan-100 to-cyan-300">
        <div className="flex justify-center items-center h-screen text-blue-900">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
