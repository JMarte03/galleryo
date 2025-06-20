import React from "react";

const Pagination = ({ page, handlePrevious, handleNext }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="join">
        {page > 1 && <button onClick={handlePrevious} className="join-item shadow-none btn border-none bg-white text-brandRed hover:shadow-none hover:text-brandRed/70 text-xl">«</button> }   
        <button className="join-item shadow-none btn border-none bg-white text-brandRed">{page}</button>
        {page < 10 && <button onClick={handleNext} className="join-item shadow-none btn border-none bg-white text-brandRed hover:shadow-none hover:text-brandRed/70 text-xl">»</button>}
      </div>
    </div>
  );
};

export default Pagination;
