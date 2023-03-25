import React from "react";

const Cards = (getMovie) => {
  console.log(getMovie.data);
  return (
    <>
      <div className="mb-4 md:mb-0 col-span-4 flex flex-col items-center text-center lg:col-span-1 lg:items-start lg:text-left">
        <div
          className="flex h-[80%] w-full flex-col justify-end rounded-md relative overflow-hidden"
          style={{
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <img
            src={getMovie.data.Poster}
            alt="movie"
            className="object-cover w-full h-full rounded-[10px] z-0"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute left-4 bottom-4 text-left">
            <h1 className="text-xl text-white font-semibold">
              {getMovie.data.Title}
            </h1>
            <p className="text-gray-300 mt-2">{getMovie.data.Year}</p>
            <p className="text-gray-300 mt-2">
              {getMovie.data.Type.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
