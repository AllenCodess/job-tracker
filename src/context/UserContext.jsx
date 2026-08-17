import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // these are the states for the input values
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <>
      <UserContext.Provider
        value={{ username, setUsername, password, setPassword, user, setUser, login, logout }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
