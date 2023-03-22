import React, { useState, useEffect } from "react";
import { Cards } from "./Cards";
// import Mealitems from "./Mealitems";

const Meal = () => {
  const [search, setSearch] = useState("");
  const [myMeal, setMyMeal] = useState();
  const searchMeal = () => {
    console.log("helooo");
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyMeal(data.meals);
        setSearch("");
      });
  };
  return (
    <div className="main ">
      <div className="heading">
        <h1 className="text-white text-4xl font-extrabold pt-8 text-center">
          Search Your Food Here
        </h1>
      </div>
      <div className="searchBox text-center m-12">
        <input
          type="text"
          name=""
          id=""
          className="search-bar w-80 h-10 outline-none border-none py-1 px-4 rounded-3xl mr-2"
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
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <Mealitems /> */}
          {myMeal == null ? (
            <p className="text-white">Not Found</p>
          ) : (
            myMeal.map((res) => {
              return <Cards data={res} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Meal;
