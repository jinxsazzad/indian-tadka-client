import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Registration = () => {
  const [error, setError] = useState("");
  // received createUser func for creating user throw context [AuthContext]
  const { createUser } = useContext(AuthContext);
  // for collect form data create 'handelRegistration' func
  const handelRegistration = (event) => {
    //event.preventDefault for prevent auto reload
    event.preventDefault();
    //for receive form
    const form = event.target;
    //for receive name which field name is 'name'
    const name = form.name.value;
    //for receive photoURL which field name is 'image'
    const photoURL = form.image.value;
    //for receive email which field name is 'email'
    const email = form.email.value;
    //for receive password which field name is 'password'
    const password = form.password.value;

    console.log(name, photoURL, email, password);
    setError("");
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }
//call createUser for creating new user. remember in behind it works like useEffect [side effect] 
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div className="container mx-auto px-4">
      <NavigationBar></NavigationBar>
      <div className="max-w-md mx-auto bg-white rounded-md shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
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
