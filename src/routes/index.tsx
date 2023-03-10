import { useRoutes, Navigate } from "react-router-dom";
import FirstPage from "../pages/firstpage";
import SecondPage from "../pages/secondpage";

const Routes = () => {
  const router = [
    {
      path: "/",
      element: <Navigate to="/first" />,
    },
    {
      path: "/first",
      element: <FirstPage />,
    },
    {
      path: "/second",
      element: <SecondPage />,
    },
  ];

  return useRoutes(router);
};

export default Routes;
