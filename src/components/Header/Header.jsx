const Header = () => {
  return (
    <div className="card lg:card-side bg-slate-100 rounded-none">
      <figure>
        <img
          src="https://images.unsplash.com/photo-1631515242808-497c3fbd3972?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1232&q=80"
          alt="Album"
        />
      </figure>
      <div className="card-body flex justify-center items-center">
        <div className="p-4">
          <h2 className="card-title text-4xl font-semibold mb-8">Test India Food In Your House!</h2>
          <p className="text-xl font-base mb-8">Try our famous chefs recipes in you home!</p>
          <div className="card-actions justify-center mb-8">
            <button className="btn btn-primary">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
