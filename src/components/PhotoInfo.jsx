import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import DownloadButton from "../components/DownloadButton";
import Tag from "../components/Tag";
import User from "../components/User";
import FullScreenButton from "./FullScreenButton";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import GoBack from "../components/GoBack";

const PhotoInfo = ({ imageData }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [open, setOpen] = useState(false);

  const handleFullscreen = () => {
    setHoveredId(null);
    setOpen(true);
  };

  const handleClose = () => {
    setHoveredId(null);
    setOpen(false);
  };
  function formatDate(dateString) {
    const date = new Date(dateString);

    const options = { month: "long", year: "numeric" };
    const monthYear = date.toLocaleString("en-US", options);

    const day = date.getDate();

    const getOrdinal = (n) => {
      if (n > 3 && n < 21) return `${n}th`;
      switch (n % 10) {
        case 1:
          return `${n}st`;
        case 2:
          return `${n}nd`;
        case 3:
          return `${n}rd`;
        default:
          return `${n}th`;
      }
    };

    return `${monthYear.split(" ")[0]} ${getOrdinal(day)}, ${
      monthYear.split(" ")[1]
    }`;
  }
  return (
    <>
      {/* prev icon */}
      <GoBack />
      <section className="flex flex-col md:flex-row gap-x-10 gap-y-7">
        {/* Image */}
        <div
          onMouseEnter={() => setHoveredId(imageData.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="cursor-pointer rounded-xl bg-deepPurple relative h-[500px] md:w-[300px] md:h-[300px] lg:w-[400px] xl:w-[900px] xl:h-[350px]"
        >
          <div
            className={`w-full h-full aspect-auto rounded-xl overflow-hidden transtion duration-150 ease-in-out  bg-center bg-cover ${
              hoveredId === imageData.id && !open ? "opacity-50" : ""
            }`}
            style={{
              backgroundImage: `url(${imageData.urls.regular})`,
            }}
            aria-label={imageData.alt_description || "Unsplash image"}
          ></div>
          <Lightbox
            open={open}
            close={handleClose}
            slides={[
              { src: imageData.urls.full, alt: imageData.alt_description },
            ]}
            render={{
              buttonPrev: () => null, // remove prev button
              buttonNext: () => null, // remove next button
            }}
          />
          {hoveredId === imageData.id && !open && (
            <div>
              <div className="absolute top-10 right-14">
                <FullScreenButton
                  onClick={handleFullscreen}
                  imgSrc={imageData.urls.small}
                />
              </div>
            </div>
          )}
        </div>

        {/* Photo info */}
        <div className="relative basis-1/2 flex flex-col flex-grow font-openSans space-y-3">
          {/* User */}
          <User userInfo={imageData.user} />
          {/* Date */}
          <div className="flex gap-x-2 items-center text-[#737373] text-xs">
            <FaCalendar />
            <span>Published on {formatDate(imageData.created_at)}</span>
          </div>
          {/* Location */}
          <div className="flex gap-x-2 items-center text-[#737373] text-xs">
            <FaLocationDot />
            <span>
              {imageData.location.city != null &&
              imageData.location.country != null
                ? `${imageData.location.city}, ${imageData.location.country}`
                : "Unknown location"}
            </span>
          </div>
          {/* Tags */}
          <div className="pt-5 w-full flex gap-3 items-center flex-wrap">
            {imageData.tags.slice(0, 7).map((tag, i) => (
              <Tag key={i} text={tag.title} />
            ))}
          </div>
          {/* Download */}
          <div className="w-full md:absolute md:bottom-0 pt-5">
            <DownloadButton photoId={imageData.id} width={"w-full"} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PhotoInfo;
