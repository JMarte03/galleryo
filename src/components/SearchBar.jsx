import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SearchBar = ({}) => {
  const [searchWord, setSearchWord] = useState('')
  const navigate = useNavigate(); 

  const redirectToKeyword = (e) => {
    if (searchWord.trim()) {
      navigate(`/search/${searchWord}`);
    }
  };

  return (
    <label className="w-full md:w-1/3 lg:w-1/2 pl-6 relative input bg-[#fbfbfb] shadow-none border-none rounded-lg focus-within:shadow-none focus-within:outline-brandRed/10">
      <input
        type="search"
        className="grow focus:ring-0 focus:ring-transparent font-openSans font-normal text-xs"
        placeholder="Search photos and illustrations"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') redirectToKeyword(e);
        }}
      />
      <button onClick={redirectToKeyword} className="absolute right-0 bg-brandRed p-3 rounded-r-lg transition duration-150 ease-in-out hover:bg-brandRed/90">
        <svg
          className="h-[1em] opacity-80"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="white"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </button>
    </label>
  );
};

export default SearchBar;
