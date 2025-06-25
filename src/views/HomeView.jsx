import React, {useState, useEffect} from "react";
import Title from "../components/Title";
import Masonry from "../components/Masonry";
import Pagination from "../components/Pagination";

const HomePage = () => {  
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const handlePrevious = () => {
    setPage(page - 1)
  }
  
  const handleNext = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const apiUrl =  `https://api.unsplash.com/photos?per_page=30&page=${page}&client_id=${import.meta.env.VITE_API_ACCESS_KEY}`;
        const res = await fetch(apiUrl);
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchImages();
  }, [page]);
  return (
    <div className="space-y-12">
      <Title>Most recent photos</Title>
      <Masonry images={images} />
      <Pagination page={page} handlePrevious={handlePrevious} handleNext={handleNext} />
    </div>
  );
};

export default HomePage;
