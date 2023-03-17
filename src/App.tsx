import React from "react";
import UserForm from "./component/UsersForm/UserForm";
import UsersDisplay from "./component/UsersDisplay/UsersDisplay";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <h1>TODO App</h1>
      <UserForm />
      <UsersDisplay />
    </React.Fragment>
  );
};

export default App;
