import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import Signup from "./pages/Signup";
import JobPage from "./pages/Job";
import NotFound from "./pages/NotFound";
import CreateJob from "./pages/CreateJob";
import JobDetailsPage from "./pages/JobDetails";
import "./index.css";

import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/jobs" element={<JobPage />} />
        <Route path="/job-details/:id" element={<JobDetailsPage />} />
        <Route path="/createjob" element={<CreateJob />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
