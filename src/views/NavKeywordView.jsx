import React, { useEffect, useState } from "react";
import Masonry from "../components/Masonry";
import Title from "../components/Title";
import Pagination from "../components/Pagination";

const NavKeywordPage = ({ keyword }) => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  const handlePrevious = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiUrl = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&page=${page}&client_id=LhBTM83G457oXl_lP8N6W66FE2xo-qK6MBIZDJ67-HE`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setImages(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [keyword, page]);

  return (
    <div className="space-y-12">
      <Title>{capitalize(keyword)}</Title>
      <Masonry images={images} />
      <Pagination
        page={page}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default NavKeywordPage;
