import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import JobPage from "./pages/Job";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<JobPage />} />
      </Routes>
    </>
  );
}

export default App;
