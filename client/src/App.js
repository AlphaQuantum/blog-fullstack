import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from "./pages/Register"
import Admin from "./pages/Admin"
import Single from "./pages/Single"
import Home from "./pages/Home"
import Login from "./pages/Login"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/single",
    element: <Single/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
