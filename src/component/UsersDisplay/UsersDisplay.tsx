import React, { useContext } from "react";
import { userContext } from "../../context/UserProvider";

const UsersDisplay: React.FC = () => {
  const { users, setUserData, setUsers } = useContext(userContext);

  const handleUpdate = (id: any) => {
    const updateUser = users.find((d) => d.id === id);
    setUserData({
      ...updateUser,
      isEditId: updateUser?.id
    });
  };

  const handleDelete = (id: any) => {
    const deleteUser = users.filter((d) => d.id !== id);
    setUsers(deleteUser);
  };

  return (
    <>
      {users?.map((d) => {
        return (
          <div key={d.id}>
            <h1>{d.username}</h1>
            <button onClick={() => handleUpdate(d.id)}>Update</button>
            <button onClick={() => handleDelete(d.id)}>Delete</button>
          </div>
        );
      })}
    </>
  );
};

export default UsersDisplay;
