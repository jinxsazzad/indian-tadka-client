import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";
import { Oval } from "react-loader-spinner";

const Chef = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://indian-tadka-server.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.error(error));
  }, []);
  if (!chefs) {
    return (
      <div className="flex justify-center items-center">
        <div className=" m-8">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={5}
            strokeWidthSecondary={5}
          />
        </div>
      </div>
    );
  }
  return (
    <>
      <h1
        id="chefs"
        className="text-3xl font-bold text-gray-800 my-6 text-center"
      >
        Famous Indian Chefs
      </h1>
      <div className="flex justify-center items-center bg-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chef;
