import { createBrowserRouter, RouterProvider } from "react-router";

import MainLayout from "../layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Skill from "../pages/Skill";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path : "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skill />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;