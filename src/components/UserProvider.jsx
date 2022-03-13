import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

const UserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
