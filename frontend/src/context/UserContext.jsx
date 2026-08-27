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

  const login = async () => {
    try {
      const res = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include", // sends cookie
      });
      const data = await res.json();
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const signup = async () => {
    try {
      const res = await fetch("/api/v1/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, passwordConfirm }),
        credentials: "include", // sends cookie
      });
      const data = await res.json();
      console.log(data);
      setUser(data.data.user);
      localStorage.setItem("user", JSON.stringify(data.data.user));
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
    localStorage.removeItem("user");
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
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
