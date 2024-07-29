import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  // @ts-ignore
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  return isMenuOpen ? null : (
    <div className="w-60  text-center flex-shrink-0 py-4">
      <div className="text-lg w-78">
        <ul>
          <Link to="/">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2 font-bold hover:text-gray-600">
              Home
            </li>
          </Link>
          <Link to="live">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2 font-bold ">
              Live
            </li>
          </Link>
          <Link to="shorts">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2 font-bold">
              Shorts
            </li>
          </Link>
        </ul>
        <hr />
        <h1 className="font-bold pt-4 py-2">Explore</h1>
        <ul>
          <Link to="/music">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
              Music
            </li>
          </Link>
          <Link to="/games">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
              Games
            </li>
          </Link>
          <Link to="/movies">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
              Movies
            </li>
          </Link>
          <Link to="/sports">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
              Sports
            </li>
          </Link>
          <Link to="/news">
            <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
              News
            </li>
          </Link>
        </ul>
        <hr />
        <h1 className="py-2 font-bold pt-4">You</h1>
        <ul>
          <li className="hover:bg-gray-300 rounded-md py-2">Your Channel</li>
          <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
            History
          </li>
          <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
            Playlist
          </li>
          <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
            Your Videos
          </li>
          <li className="hover:bg-gray-300 cursor-pointer rounded-lg py-2">
            Liked Videos
          </li>
        </ul>
        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
