import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between h-16 ">
      <div className=" text-2xl italic text-tomato font-semibold">meetup</div>
      <div>
        <input
          type="search"
          placeholder="search by title and  tags"
          className=" outline-0 border-gray rounded-lg h-9 mt-4 bg-white"
        />
      </div>
    </div>
  );
}

export default Navbar;
