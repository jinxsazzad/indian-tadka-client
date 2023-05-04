import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Registration = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);

  const handelRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.image.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    setError("");
    if (password.length < 8) {
      setError("Your password must be at least 8 characters");
      return;
    }
    if (password.search(/[a-z]/i) < 0) {
      setError("Your password must contain at least one letter.");
      return;
    }
    if (password.search(/[0-9]/) < 0) {
      setError("Your password must contain at least one digit.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto px-4">
      <NavigationBar></NavigationBar>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        {error ? (
          <p className=" bg-slate-300 p-2 rounded-md text-red-600 text-center">
            {error}
          </p>
        ) : (
          <></>
        )}
        <form onSubmit={handelRegistration}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="border border-gray-400 py-2 px-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
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
              required
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
              required
            />
          </div>
          <div className="flex justify-center mb-6">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300"
            >
              Registrar Now
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center my-6">
          <hr className="w-1/3 border-gray-300 border-1" />
          <span className="mx-4 text-gray-500 font-medium">or</span>
          <hr className="w-1/3 border-gray-300 border-1" />
        </div>

        <p className="text-gray-600 text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500 hover:underline">
            Log in here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Registration;
