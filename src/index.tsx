import { render } from "react-dom";

import App from "./App";
import UserProvider from "./context/UserProvider";

const rootElement = document.getElementById("root");
render(
  <UserProvider>
    <App />
  </UserProvider>,
  rootElement
);
