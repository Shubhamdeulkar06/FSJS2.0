import React from "react";

export const Cards = (getMeal) => {
  console.log(getMeal.data);
  return (
    <div className="rounded overflow-hidden shadow-lg dark:shadow-gray-800">
      <img className="w-full" src={getMeal.data.strMealThumb} alt="Mountain" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">
          {getMeal.data.strMeal}
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">
          {getMeal.data.strArea} food
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"></span>
      </div>
    </div>
  );
};

Cards.displayName = "Cards";
