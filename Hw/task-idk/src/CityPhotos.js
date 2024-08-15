import React from 'react';
import './CityPhotos.css';

const photos = [ 
  {
    title: 'Caspian Sea Shore',
    imageUrl: 'six.jpg',
  },
  {
    title: 'Heydar Aliyev Center',
    imageUrl: 'cet.jpg',
  },
  {
    title: 'Caspian Sea Shore',
    imageUrl: 'six.jpg',
  },
  {
    title: 'Heydar Aliyev Center',
    imageUrl: 'cet.jpg',
  },
  {
    title: 'Caspian Sea Shore',
    imageUrl: 'six.jpg',
  },
  {
    title: 'Heydar Aliyev Center',
    imageUrl: 'cet.jpg',
  },
];

function CityPhotos() {
  return (
    <div className="photos-container">
      <h1 className="photos-title">Explore Baku Through Photos</h1>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-card">
            <img src={photo.imageUrl} alt={photo.title} className="photo-image" />
            <h2 className="photo-title">{photo.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityPhotos;
