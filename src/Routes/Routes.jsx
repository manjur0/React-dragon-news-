import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root/Root";
import About from "../Pages/About/About";
import Career from "../Pages/Career/Career";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
        }
      ]
    },
  ]);

  export default router;