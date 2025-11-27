
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import RootLayout from "./pages/RootLayout";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/register", element: <Register /> },
      { path: "/Login", element: <Login/>},
      { path: "/reset-password", element: <ResetPassword/>}
    ],
  }
])

const App = () => {


  return <RouterProvider router={router} />;

};


export default App
