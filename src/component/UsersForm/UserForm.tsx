import React, { useContext } from "react";
import { userContext } from "../../context/UserProvider";

const UserForm: React.FC = () => {
  const { userData, setUserData, setUsers, users } = useContext(userContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      username: event.target.value
    });
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const myObj = {
      id: Math.floor(Math.random() * 1000),
      username: userData.username
    };
    if (userData?.isEditId) {
      const updateUsersData = users.map((d) => {
        if (d.id === userData.isEditId) {
          return { ...d, ...userData };
        }
        return d;
      });
      setUsers(updateUsersData);
      setUserData({
        id: null,
        username: "",
        isEditId: null
      });
    } else {
      setUsers([...users, myObj]);
      setUserData({
        id: null,
        username: "",
        isEditId: null
      });
    }
  };

  return (
    <>
      <form>
        <input
          value={userData.username}
          type="text"
          placeholder="Enter username"
          name="username"
          onChange={handleChange}
        />
        <button onClick={handleSubmit} type="submit">
          {userData?.isEditId ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default UserForm;
