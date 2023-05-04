const SpecialDishes = () => {
  return (
    <div className="container">
      <h1
        id="chefs"
        className="text-3xl font-bold text-gray-800 my-6 text-center"
      >
        Our special dishes
      </h1>
      <div className=" bg-slate-100 p-4">
        <div className="card card-side lg:card-side bg-base-100 flex-col">
          <figure className=" lg:w-2/4 ">
            <img src="https://fdstatic.foodfood.com/odd/images/Almond-Crusted-Chicken.jpg" />
          </figure>
          <div className="card-body lg:w-2/4">
            <h1 className=" text-2xl lg:text-8xl font-bold text-red-600">
              01. <hr />
            </h1>
            <h2 className="card-title text-xl lg:text-7xl font-semibold ">
              Almond Crusted Chicken!
            </h2>
            <p className=" text-base font-medium">
              Include this delightful protein filled starter in your dinner menu
              and win the hearts of your loved ones. The crushed almond coating
              makes it crispier.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Show Full Recipe</button>
            </div>
          </div>
        </div>
        <div className="card lg:card-side bg-base-100 flex-col-reverse">
          <div className="card-body lg:w-2/4">
            <h1 className=" text-2xl lg:text-8xl font-bold text-red-600">
              02. <hr />
            </h1>
            <h2 className="card-title text-xl lg:text-7xl font-semibold ">
              Chicken and Apple Sandwich!
            </h2>
            <p className=" text-base font-medium">
              The softness of chicken mince and crunch of apple and celery
              mingle well in these delicious sandwiches.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-primary">Show Full Recipe</button>
            </div>
          </div>
          <figure className=" lg:w-2/4">
            <img src="https://fdstatic.foodfood.com/odd/images/edited3.jpg" />
          </figure>
        </div>
        <div className="flex justify-center items-center m-8">
          <button className="btn btn-outline">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialDishes;
