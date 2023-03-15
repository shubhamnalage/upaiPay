/* eslint-disable */
import { useRoutes, Navigate } from "react-router-dom";
import HtmlComponent from "./components/HtmlComponent";
import Home from "./pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/upiGateway",
      element: <HtmlComponent />,
    },
  ]);
}
