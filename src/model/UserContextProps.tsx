import { Users } from "./Users";

export interface UserContextProps {
  users: Users[];
  setUsers: React.Dispatch<React.SetStateAction<Users[]>>;
  userData: {
    id?: number;
    username: string;
    isEditId?: number;
  };
  setUserData: React.Dispatch<React.SetStateAction<object>>;
}
