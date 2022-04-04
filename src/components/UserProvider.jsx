import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
