import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // these are the states for the input values
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ username, setUsername, password, setPassword }}>
        {children}
      </UserContext.Provider>
    </>
  );
};
