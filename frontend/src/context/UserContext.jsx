import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });
  // these are the states for the input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    setError("");
    try {
      const res = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // sends cookie
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return false;
      }
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      return true;
    } catch (error) {
      setError("Something went wrong. Try again.");
      return false;
    }
  };

  const signup = async () => {
    setError("");
    try {
      const res = await fetch("/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
        credentials: "include", // sends cookie
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return false;
      }

      setUser(data.data.user);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      return true;
    } catch (error) {
      setError("Something went wrong. Try again.");
      return false;
    }
  };

  const logout = async () => {
    try {
      await fetch("/api/v1/users/logout", { method: "POST", credentials: "include" });
    } catch (err) {
      console.error(err.message);
    }
    setUser(null);
    setEmail("");
    setPassword("");
    localStorage.removeItem("user");
  };

  const createJob = async (jobData) => {
    try {
      const res = await fetch("/api/v1/jobs/createjob", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        console.error(data.message);
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const editJob = async (id, jobData) => {
    try {
      const res = await fetch(`/api/v1/jobs/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(jobData),
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        console.error(data.message);
        return;
      }

      return data.data;
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteJob = async (id) => {
    try {
      const res = await fetch(`/api/v1/jobs/${id}`, {
        method: "DELETE",
        credentials: "include",
      });
      const data = await res.json();

      if (!res.ok) {
        console.error(data.message);
        return;
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <UserContext.Provider
        value={{
          name,
          setName,
          email,
          setEmail,
          password,
          setPassword,
          passwordConfirm,
          setPasswordConfirm,
          user,
          setUser,
          login,
          logout,
          signup,
          createJob,
          editJob,
          deleteJob,
          error,
          setError,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
