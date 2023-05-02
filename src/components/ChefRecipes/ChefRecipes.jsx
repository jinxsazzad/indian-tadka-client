import { useLoaderData, useParams } from "react-router-dom";
import NavigationBar from "../NavigationBar/NavigationBar";
import RecipeCard from "./RecipeCard";

const ChefRecipes = () => {
    const chefID = useParams();
    const ID = parseInt(chefID.id)
    const chefRecipes = useLoaderData()
    const chefRecipesByChefID = chefRecipes.find(({id})=> id === ID)
    const {likes,name,num_recipes,picture_url,recipes,years_of_experience}=chefRecipesByChefID
  
  return (
    <div className="container mx-auto px-4">
      <NavigationBar></NavigationBar>
      <div className=" bg-slate-100">
        <div className="bg-blue-500 text-white p-8">
          <div className="flex justify-center items-center mb-4">
            <img
              src={picture_url}
              alt={name}
              className="rounded-full h-32 w-32 mr-2 "
            />
            
            <div>
              <h1 className="text-4xl font-bold">{name}</h1>
              <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque autem esse beatae voluptatum obcaecati inventore fugit consequatur voluptatem, dolores id suscipit perferendis atque architecto repudiandae, sapiente ea quae temporibus.</p>
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
        <div className="flex justify-center items-center bg-slate-100 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                recipes.map(recipe => <RecipeCard
                key={recipe.id}
                recipe={recipe}
                >hello</RecipeCard>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
