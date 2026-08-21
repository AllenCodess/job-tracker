import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import JobPage from "./pages/Job";
import NotFound from "./pages/NotFound";
import CreateJob from "./pages/CreateJob";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/createjob" element={<CreateJob />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
