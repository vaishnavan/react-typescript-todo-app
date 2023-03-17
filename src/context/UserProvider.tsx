import React, { createContext, useEffect, useState } from "react";
import { Users, UserContextProps, UsersProps } from "../model";

export const userContext = createContext<UserContextProps>({
  users: [],
  setUsers: () => {},
  userData: { id: 0, username: "", isEditId: 0 },
  setUserData: () => {}
});
const initialState = {
  id: null,
  username: "",
  isEditId: null
};
const UserProvider: React.FC<UsersProps> = ({ children }) => {
  const [userData, setUserData] = useState<any>(initialState);
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const storedData = localStorage.getItem("users");
    if (storedData) {
      setUsers(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <userContext.Provider value={{ userData, setUserData, users, setUsers }}>
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
