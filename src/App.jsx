import './App.css'
import Register from './components/Register'
import Success from './components/Success';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App
