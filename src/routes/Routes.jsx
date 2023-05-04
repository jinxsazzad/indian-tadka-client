import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import LogIn from "../components/forms/LogIn";
import Registration from "../components/forms/Registration";
import MainLayout from "../layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/registration",
    element: <Registration></Registration>,
  },
  {
    path: "/Login",
    element: <LogIn></LogIn>,
  },
  {
    path: "/chefs-recipes/:id",
    element: (
      <PrivateRoute>
        <ChefRecipes></ChefRecipes>
      </PrivateRoute>
    ),
    loader: () => fetch(`https://indian-tadka-server.vercel.app/chef`),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default Routes;
