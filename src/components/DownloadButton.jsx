import React from "react";
import { MdDownload } from "react-icons/md";

const DownloadButton = ({ photoId, width }) => {
  const handleDownload = async () => {
    try {
      // 1. Track download and get the actual image URL
      const trackingRes = await fetch(
        `https://api.unsplash.com/photos/${photoId}/download?client_id=LhBTM83G457oXl_lP8N6W66FE2xo-qK6MBIZDJ67-HE`
      );
      const trackingData = await trackingRes.json();
      const imageUrl = trackingData.url;

      // 2. Fetch the image as a blob
      const imageRes = await fetch(imageUrl);
      const blob = await imageRes.blob();

      // 3. Create blob URL and trigger download
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `unsplash-${photoId}.png`; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className={`btn ${width} py-6 shadow-none font-light bg-brandRed border-none rounded-md text-white hover:bg-[#f4777f]`}
    >
      <MdDownload className="mr-2" /> Download Image
    </button>
  );
};

export default DownloadButton;
