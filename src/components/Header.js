import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toggleMenu } from "../Redux/appSlice";
import { toggleDarkMode } from "../Redux/darkModeSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../Redux/searchSlice";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const themeHandler = () => {
    dispatch(toggleDarkMode());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // @ts-ignore
  const searchCache = useSelector((store) => store.search);
  // @ts-ignore
  const darkMode = useSelector((store) => store.mode.mode);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchQuery}`);
  };

  return (
    <div
      className={`main grid grid-flow-col p-5  shadow-md ${
        darkMode ? "dark" : "light"
      }`}
    >
      <div className="flex col-span-1">
        <div
          onClick={toggleMenuHandler}
          className="h-10 cursor-pointer  flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
        <a href="/">
          <img
            className="h-10 mx-2"
            src="https://raw.githubusercontent.com/PHPJunior/mtube/master/public/images/logo.png"
            alt="Mutube-logo"
          />
        </a>
      </div>

      <div className="col-span-10 px-20 flex">
        <input
          type="text"
          className={`w-1/2 border border-gray-400  p-2 rounded-l-3xl px-6 ${
            darkMode ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className={`border border-gray-400 p-2 px-4 rounded-r-3xl ${
            darkMode ? "bg-gray-600 text-white" : "bg-gray-300 text-black"
          } flex overflow-hidden`}
          onClick={handleSubmit}
        >
          🔍
        </button>
        {showSuggestions && (
          <div
            className={`absolute ${
              darkMode ? "bg-gray-800" : "bg-white"
            } w-[32%] shadow-lg rounded-xl mt-11 `}
          >
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className={`py-2 px-2 shadow-sm hover:bg-slate-300 ${
                    darkMode ? "dark:hover:bg-gray-700" : "bg-white text-black"
                  } rounded-lg`}
                >
                  <Link to={`/search/${s}`}> 🔍 {s}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={themeHandler}
          className={`p-2 rounded ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
          }`}
        >
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>

      <div className="col-span-1">
        <CgProfile size={40} />
      </div>
    </div>
  );
};

export default Header;
