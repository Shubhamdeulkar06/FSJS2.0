import React from "react";

const Mealitems = () => {
  return (
    <>
      <div className="card w-80 h-[400px] m-6">
        <img
          src="https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg"
          alt="sushi"
        />
        <div className="info">
          <h2>Sushi</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            quidem modi, voluptate quis officiis sunt excepturi quas! Inventore,
            consequatur iure.
          </p>
        </div>
        <div className="recipe">
          <h2>Recipe</h2>
          <img
            src="https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg"
            alt=""
          />
          <a href="">Watch Video</a>
        </div>
      </div>
    </>
  );
};

export default Mealitems;
