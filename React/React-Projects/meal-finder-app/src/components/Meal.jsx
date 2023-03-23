import React, { useState, useEffect } from "react";
import { Cards } from "./Cards";
// import Mealitems from "./Mealitems";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [myMeal, setMyMeal] = useState();
  const [check, setCheck] = useState(false);

  const searchMeal = () => {
    console.log("helooo");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.meals == null) {
          alert("Food Not Found");
          setSearch("");
        } else {
          setMyMeal(data.meals);
          setSearch("");
          setCheck(true);
        }
      });
  };
  return (
    <div className="main px-2">
      <div className="heading">
        <h1 className="text-white text-4xl font-extrabold pt-8 text-center">
          Search Your Food Here
        </h1>
      </div>
      <div className="searchBox flex gap-1 justify-center items-center m-6 md:m-12">
        <input
          type="text"
          name=""
          id=""
          className="search-bar w-[70%] h-10 outline-none border-none py-1 px-4 rounded-3xl mr-2 md:w-80"
          placeholder="What do you want?........"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button
          className="rounded-full bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500 "
          onClick={searchMeal}
        >
          Search
        </button>
      </div>
      <div className="container w-[80%] my-0 mx-auto flex justify-around flex-wrap">
        <div className="p-0 md:p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {myMeal ? (
            myMeal.map((res) => {
              return <Cards data={res} key={res.idMeal} />;
            })
          ) : (
            <p className="text-white text-center "></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meal;
