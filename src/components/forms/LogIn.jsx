import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const LogIn = () => {
  const [show, setShow] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto px-4">
      <NavigationBar></NavigationBar>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Log in</h2>
        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-400 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-400 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p onClick={() => setShow(!show)}>
              <small>
                {show ? <span>Hide Password</span> : <span>Show Password</span>}
              </small>
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Log in
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-6">
          <hr className="w-1/3 border-gray-300 border-1" />
          <span className="mx-4 text-gray-500 font-medium">or</span>
          <hr className="w-1/3 border-gray-300 border-1" />
        </div>

        <div className="flex justify-center my-6">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300 flex items-center">
            <FaGoogle className="text-white mr-2" />
            Log in with Google
          </button>
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-2 px-4 rounded-md transition duration-300 ml-2 flex items-center">
            <FaGithub className="text-white mr-2" />
            Log in with GitHub
          </button>
        </div>
        <p className="text-gray-600 text-center my-2">
          Are you new?{" "}
          <Link to={"/registration"} className="text-blue-500 hover:underline">
            Register here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default LogIn;
