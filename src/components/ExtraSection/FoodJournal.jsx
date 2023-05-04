const FoodJournal = () => {
  return (
    <div>
      <div className="container">
        <h1
          id="chefs"
          className="text-3xl font-bold text-gray-800 my-6 text-center"
        >
          Our special dishes
        </h1>
        <div className=" bg-slate-100 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://fdstatic.foodfood.com/odd/images/tajagroRed-Chilli-Powder.jpg"
                alt="Card 1"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Restore Strong Flavor of Your Red C
                </h2>
                <p className="text-gray-600 mb-4">
                  Chili powder tends to get stale or develops
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://fdstatic.foodfood.com/odd/images/egg.jpg"
                alt="Card 2"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Secret to Fluffier Omelette and Scr
                </h2>
                <p className="text-gray-600 mb-4">
                  It is very easy to whip up unbelievably fluffy ome.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://fdstatic.foodfood.com/odd/images/tajagroRed-Chilli-Powder.jpg"
                alt="Card 3"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Restore Strong Flavor of Your Red C
                </h2>
                <p className="text-gray-600 mb-4">
                  Chili powder tends to get stale or develops
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://fdstatic.foodfood.com/odd/images/egg.jpg"
                alt="Card 4"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Secret to Fluffier Omelette and Scr
                </h2>
                <p className="text-gray-600 mb-4">
                  It is very easy to whip up unbelievably fluffy ome.
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://fdstatic.foodfood.com/odd/images/tajagroRed-Chilli-Powder.jpg"
                alt="Card 4"
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Restore Strong Flavor of Your Red C
                </h2>
                <p className="text-gray-600 mb-4">
                  Chili powder tends to get stale or develops
                </p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center m-8">
            <button className="btn btn-outline">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodJournal;
