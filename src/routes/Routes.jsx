import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Registration from "../components/forms/Registration";
import LogIn from "../components/forms/LogIn";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ChefRecipes from "../components/ChefRecipes/ChefRecipes";
import PrivateRoute from "./PrivateRoute";
import Blog from "../components/Blog/Blog";

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
    loader: () => fetch(`http://localhost:5000/chef`),
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default Routes;
