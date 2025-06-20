import React, { useState } from "react";
import CustomImage from "./MasonryImage";

const Masonry = ({ images }) => {
  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
        {images.map((photo, index) => (
          <CustomImage
            key={photo.id}
            photo={photo}
            className="mb-4 break-inside-avoid rounded-lg bg-deepPurple relative"
            onClick={() => openLightbox(index)} // Pass this down
          />
        ))}
      </div>
    </>
  );
};

export default Masonry;
