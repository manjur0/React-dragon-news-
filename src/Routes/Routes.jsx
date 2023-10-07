import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivetRouter from "./PrivetRouter/PrivetRouter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home> </Home>,
        loader: () => fetch('/news.json')
          .then(res => res.json())
          .then(data => data)

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
      },
      {
        path: '/news/:id',
        element: <PrivetRouter>
          <News></News>
        </PrivetRouter>
      }
    ]
  },
]);

export default router;