import { useRoutes } from "react-router-dom";
import About from "../pages/about/About";
import Layout from "../pages/layout/Layout";
import { Home } from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Cart from "../pages/cart/Cart";

const Routers = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "*",
              element: <div>404</div>,
            },
            {
              path: "/product/:id",
              element: <Detail />,
            },
            {
              path: "/cart",
              element: <Cart />,
            },
          ],
        },
      ])}
    </>
  );
};

export default Routers;
