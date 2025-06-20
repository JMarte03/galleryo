import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
import { NavLink } from "react-router-dom";
import FullScreenButton from "./FullScreenButton";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CustomImage = ({ photo, className }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFullscreen = () => {
    setHoveredId(null); // 👈 Reset hover manually when opening
    setOpen(true);
  };

  const handleClose = () => {
    setHoveredId(null); // 👈 Also clear on close to be extra safe
    setOpen(false);
  };

  return (
    <div
      onMouseEnter={() => setHoveredId(photo.id)}
      onMouseLeave={() => setHoveredId(null)}
      className={className}
    >
      <NavLink to={`/photos/${photo.id}`}>
        <img
          src={photo.urls.small}
          alt={photo.alt_description}
          className={`w-full object-cover cursor-pointer rounded-lg transtion duration-150 ease-in-out  ${
            hoveredId === photo.id && !open ? "opacity-50" : ""
          }`}
        />
      </NavLink>
      <Lightbox
        open={open}
        close={handleClose}
        slides={[{ src: photo.urls.full, alt: photo.alt_description }]}
        render={{
          buttonPrev: () => null, // remove prev button
          buttonNext: () => null, // remove next button
        }}
      />
      {hoveredId === photo.id && !open && (
        <div>
          <div className="absolute top-10 right-14">
            <FullScreenButton
              onClick={handleFullscreen}
              imgSrc={photo.urls.small}
            />
          </div>
          <div className="w-full flex flex-col items-center space-y-4 absolute bottom-10 font-openSans">
            <DownloadButton photoId={photo.id} width={"w-[65%]"} />
            <p className="text-white text-xs font-light">
              Photo by{" "}
              <a
                href={`${photo.user.links.html}?utm_source=react_image_library&utm_medium=referral`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white/90"
              >
                {photo.user.name}
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/?utm_source=react_image_library&utm_medium=referral"
                className="underline hover:text-white/90"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomImage;
