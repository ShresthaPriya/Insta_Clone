
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Layout from "./pages/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/register", element: <Register /> },
    ],
  }
])

const App = () => {


  return <RouterProvider router={router} />;

};


export default App
