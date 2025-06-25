import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoInfo from "../components/PhotoInfo";
import Masonry from "../components/Masonry";

const PhotoView = () => {
  const { id } = useParams();
  const [imageData, setImageData] = useState();
  const [relatedCollection, setRelatedCollection] = useState();
  const [collectionImages, setCollectionImages] = useState([]);

  useEffect(() => {
    const fetchImageData = async () => {
      try {
        const apiUrl = `https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_API_ACCESS_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setImageData(data);
        console.log(data.id)
        setRelatedCollection(data.related_collections.results[0].links.photos);
      } catch (err) {
        console.log(err);
      }
    };

    fetchImageData();
  }, [id]);

  useEffect(() => {
    const fetchRelatedImages = async () => {
      try {
        const apiUrl = `${relatedCollection}?per_page=20&client_id=${import.meta.env.VITE_API_ACCESS_KEY}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setCollectionImages(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRelatedImages();
  }, [relatedCollection]);

  return (
    <div className="-mt-5">
      {imageData && collectionImages ? (
        <div>
          <section className="mb-12">
            <PhotoInfo imageData={imageData} />
          </section>
          <hr className="hidden border-none bg-[#f0f0f0] h-[1px] md:block" />
          <section>
            <Masonry images={collectionImages}/>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PhotoView;
