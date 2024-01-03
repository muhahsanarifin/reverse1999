import { createBrowserRouter } from "react-router-dom";

import Home, { Detail } from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/characters/:slug",
    element: <Detail />,
  },
]);

export default router;
