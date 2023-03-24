import { useState } from "react";
import axios from "axios";
import "./App.css";
// import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  const [movie, setMovie] = useState([]);
  const fetchMovies = () => {
    axios
      .get("http://www.omdbapi.com/?s=pink&apikey=b2ba7cf8")
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      {/* Nav bar */}
      <div className="">
        <nav className="relative px-8 py-4 flex justify-between items-center border-y border-gray-400 dark:border-gray-700">
          <a
            className="text-3xl font-bold leading-none flex items-center space-x-4"
            href="#"
          >
            <span className="text-gray-600  text-xl">KoolMovies</span>
          </a>
          <div className="lg:hidden">
            <button className="navbar-burger flex items-center text-gray-600 dark:text-gray-300 p-3">
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
              </svg>
            </button>
          </div>
          <ul className="hidden lg:flex lg:items-center lg:justify-end grow mr-4">
            <li>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
                href="#"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 px-4 py-2"
                href="#"
              >
                About
              </a>
            </li>
            <li>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 dark:bg-gray-800 rounded-md focus:outline-none focus:bg-white focus:text-gray-900"
                  placeholder="Search"
                />
                <button
                  onClick={fetchMovies}
                  className="ml-1 rounded-md bg-indigo-600 px-3.5 py-1 text-sm font-semibold leading-7 text-white hover:bg-indigo-500 "
                >
                  Search
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5">
        {movie.map((value, index) => {
          return (
            <div key={index}>
              <Cards data={value} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
