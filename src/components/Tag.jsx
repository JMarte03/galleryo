import React from "react";
import { NavLink } from "react-router-dom";

const Tag = ({ text }) => {
  return (
    <NavLink to={`/search/${text}`}>
      <div className="cursor-pointer font-openSans text-sm rounded-sm py-2 px-4 w-fit bg-[#f6f6f6] hover:bg-[#f1f1f1]">
        {text}
      </div>
    </NavLink>
  );
};

export default Tag;
