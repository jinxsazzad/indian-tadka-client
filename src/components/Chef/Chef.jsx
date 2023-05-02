import { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const Chef = () => {
    const [chefs,setChefs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/chefs').then(res=>res.json()).then(data=>setChefs(data)).catch(error=>console.error(error))
    },[])
  return (
    <>
    <h1 id="chefs" className="text-3xl font-bold text-gray-800 my-6 text-center">Famous Indian Chefs</h1>
      <div className="flex justify-center items-center bg-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
            {
                chefs.map(chef =><ChefCard
                key={chef.id}
                chef={chef}
                ></ChefCard>)
            }
        </div>
      </div>
    </>
  );
};

export default Chef;
