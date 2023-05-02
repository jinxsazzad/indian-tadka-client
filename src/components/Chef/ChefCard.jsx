import { Link } from "react-router-dom";

const ChefCard = ({chef}) => {
    const {id,name,image_url,years_of_experience,num_recipes,likes} = chef;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 h-2/4">
        <img
          src={image_url}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-4xl font-bold ">{name}</h2>
        <p className=" font-semibold text-lg">{years_of_experience} years of experience</p>
        <p className=" font-semibold text-lg">{num_recipes} recipes</p>
        <p className=" font-semibold text-lg">{likes} likes</p>
        <div className="card-actions">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            <Link to={`/chefs-recipes/${id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
