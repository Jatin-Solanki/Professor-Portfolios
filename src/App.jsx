import { Navbar } from "./components/Navbar/Navbar"
import "./App.css";
import { HomePage } from "./pages/Home/homepage";
import { AboutPage } from "./pages/About/aboutpage";
import { LabPage } from "./pages/labpage/labpage";
import { Publication } from "./pages/publication/publication";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./Layout/applayout";
export const App=()=>{
  const router= createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<HomePage/>,
        },
        {
          path:"/about",
          element:<AboutPage/>,
        },
        {
          path:"/lab",
          element:<LabPage/>,
        },
        {
          path:"/publication",
          element:<Publication/>,
        }
      ]
    }
  ]);
  return <RouterProvider router={router}/>;
}
