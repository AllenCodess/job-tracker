import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // these are the states for the input values
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logout = () => {
    setUser(null);
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <UserContext.Provider
        value={{ email, setEmail, password, setPassword, user, setUser, login, logout }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
