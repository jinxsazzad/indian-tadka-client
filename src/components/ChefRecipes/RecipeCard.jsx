import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, name, ingredients, cooking_method, rating } = recipe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-6 py-6">
        <img src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80" alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">Recipe Name:{name}</h2>
        <p className="text-sm mb-2">
          Ingredients: <hr></hr>
          {ingredients.map((i) => (
            <ul key={i.id}>
              <li>{i}</li>
            </ul>
          ))}
        </p>
        <p className="text-sm mb-2">
          Cooking Method: <br />
          {cooking_method}
        </p>
        <p className="text-sm mb-2">Rating:{rating}</p>
        <div className="card-actions">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <Link to={`/chefs-recipes/${id}`}>Add to Favorite</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
