// PhotoGallery.js
import React, { useState } from "react";
import Image from "next/image";
import photoData from "./PhotoGalleryData";
import "./PhotoGallery.scss";

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleClick = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeGallery = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="photo-gallery">
      {photoData.map((photo, index) => (
        <div
          key={index}
          className="photo-item"
          onClick={() => handleClick(photo)}
        >
          <Image
            src={photo.imageUrl}
            alt={photo.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
      ))}

      {selectedPhoto && (
        <div className="modal">
          <Image
            src={selectedPhoto.imageUrl}
            alt={selectedPhoto.title}
            width={800}
            height={500}
            layout="responsive"
          />
          <p>{selectedPhoto.title}</p>
          <button onClick={closeGallery}>Fermer</button>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
