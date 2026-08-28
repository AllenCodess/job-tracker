import Navbar from "./components/Navbar";
import { Routes, Route, Navigate } from "react-router";
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
import EditJob from "./pages/EditJob";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={user ? <Navigate to="/jobs" /> : <LoginPage />} />
        <Route path="/signup" element={user ? <Navigate to="/jobs" /> : <Signup />} />
        <Route path="/jobs" element={user ? <JobPage /> : <Navigate to="/login" />} />
        <Route
          path="/job-details/:id"
          element={user ? <JobDetailsPage /> : <Navigate to="/login" />}
        />
        <Route path="/createjob" element={user ? <CreateJob /> : <Navigate to="/login" />} />
        <Route path="/editjob/:id" element={user ? <EditJob /> : <Navigate to="/login" />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
