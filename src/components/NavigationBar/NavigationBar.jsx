import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { useContext } from "react";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink className="text-base font-bold" to={"/"}>
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              <a href="#chefs" className="justify-between text-base font-bold">
                Chefs
              </a>
            </li>
            <li>
              <NavLink className="text-base font-bold" to={"/blog"}>
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="">
          <h1
            id="chefs"
            className="text-3xl font-bold text-gray-800 text-center"
          >
            Indian Tadka
          </h1>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className="text-base font-bold" to={"/"}>
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            <a href="#chefs" className="text-base font-bold">
              Chefs
            </a>
          </li>
          <li>
            <NavLink className="text-base font-bold" to={"/blog"}>
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end flex justify-center items-center">
          {user ? (
            <>
              <div className="w-10 rounded-full btn-circle avatar">
                <img
                  className=" rounded-3xl"
                  src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt={user.email}
                />
              </div>
              <button
                onClick={handleLogout}
                className=" text-base font-bold btn btn-outline ms-2"
              >
                Log Out
              </button>
            </>
          ) : (
            <button className=" text-base font-bold btn btn-outline ms-2">
              <NavLink to={"/login"}>Log In</NavLink>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
