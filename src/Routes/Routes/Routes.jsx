import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Cources from "../../pages/Cources/Cources";
import Home from "../../pages/Home/Home";
import Login from "../../pages/UserLogin/Login/Login";
import Register from "../../pages/UserLogin/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/cources", element: <Cources /> },
    ],
  },

  { path: "*", element: <div>404</div> },
]);
