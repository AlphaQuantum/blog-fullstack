import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Register from "./pages/Register"
import Admin from "./pages/Admin"
import Single from "./pages/Single"
import Home from "./pages/Home"
import Login from "./pages/Login"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import "./style.scss";

const router = createBrowserRouter([
  {//I know i can use children, but i don't want to as for now
    path: "/",
    element:
      <>
        <Navbar />
        <Home />
        <Footer />
      </>,
  },
  {
    path: "/admin",
    element: <>
      <Navbar />
      <Admin />
      <Footer />
    </>,
  },
  {
    path: "/post/:id",
    element: <>
      <Navbar />
      <Single />
      <Footer />
    </>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
