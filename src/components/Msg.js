import React from "react";

const Msg = ({ name, message }) => {
  return (
    <div>
      <div className="flex items-center">
        <img
          className="h-8 "
          src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg"
          alt="profile-icon"
        />

        <span className=" font-bold m-2">{name}</span>
        <span className="px-2">{message}</span>
      </div>
    </div>
  );
};

export default Msg;
