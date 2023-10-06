import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element: <Home> </Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/career',
          element: <Career></Career>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;