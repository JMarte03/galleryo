import React, { useState } from "react";
import { GoScreenFull } from "react-icons/go";

const FullScreenButton = ({onClick}) => {
  return (
    <>
      <div
        onClick={onClick}
        className="cursor-pointer p-3 rounded-xl hover:bg-white/30"
      >
        <GoScreenFull className="text-white text-xl" />
      </div>
    </>
  );
};

export default FullScreenButton;
