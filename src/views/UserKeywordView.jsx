import React, { useEffect, useState } from "react";
import Masonry from "../components/Masonry";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import Pagination from "../components/Pagination";

const UserKeywordView = () => {
  const [images, setImages] = useState([]);
  const { keyword } = useParams();
  const [page, setPage] = useState(1);

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
        const apiUrl = `https://api.unsplash.com/search/photos?query=${keyword}&per_page=30&page=${page}&client_id=${import.meta.env.VITE_API_ACCESS_KEY}`;
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
      <Title>Showing results for '{keyword}'</Title>
      <Masonry images={images} />
      <Pagination
        page={page}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
      />
    </div>
  );
};

export default UserKeywordView;
