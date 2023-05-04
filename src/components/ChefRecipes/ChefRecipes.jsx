import { useLoaderData, useParams } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import RecipeCard from "./RecipeCard";
import { Oval } from "react-loader-spinner";
import Footer from "../Footer/Footer";

const ChefRecipes = () => {
  const chefID = useParams();
  const ID = parseInt(chefID.id);
  const chefRecipes = useLoaderData();
  const chefRecipesByChefID = chefRecipes.find(({ id }) => id === ID);
  const {
    likes,
    name,
    num_recipes,
    picture_url,
    chef_description,
    recipes,
    years_of_experience,
  } = chefRecipesByChefID;

  if (!chefRecipes) {
    return (
      <div className="flex justify-center items-center h-screen">
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
    );
  }

  return (
    <div className="container mx-auto px-4">
      <NavigationBar></NavigationBar>
      <div className=" bg-slate-100">
        <div className="bg-blue-500 text-white p-8">
          <div className="flex justify-center items-center mb-4 gap-10">
            <img
              src={picture_url}
              alt={name}
              className="w-full md:w-64 h-40 md:h-48 transform md:-skew-x-12 rounded-lg ms-6  "
            />
            <div className=" border-s-2 border-white ps-14 ms-8 ">
              <h1 className="text-4xl font-bold mb-4">{name}</h1>
              <hr />
              <p className="text-lg mt-2">{chef_description}</p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <p>Likes: {likes}</p>
              <p>Recipes: {num_recipes}</p>
              <p>Years of experience: {years_of_experience}</p>
            </div>
            <button className="bg-white text-blue-500 px-4 py-2 rounded-full">
              Follow
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center my-6">
          <hr className="w-1/3 border-gray-300 border-1" />
          <span className="mx-4 text-gray-500 font-medium">recipes</span>
          <hr className="w-1/3 border-gray-300 border-1" />
        </div>
        <div className="flex justify-center items-center bg-slate-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe}></RecipeCard>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipes;
