import React from 'react';
import { Link } from 'react-router-dom';
import './OtherLandmarks.css';

const landmarks = [
  {
    id: 1,
    name: 'Maiden Tower',
    description: 'The Maiden Tower is a 12th-century monument in the Old City of Baku. It is a symbol of Baku and of Azerbaijan itself. The tower is part of the UNESCO World Heritage site and is steeped in history and legend.',
    imageUrl: '/tower.png',
  },
  {
    id: 2,
    name: 'Old City (Icherisheher)',
    description: 'The Old City, or Icherisheher, is the historical core of Baku. Surrounded by ancient walls, it contains many important architectural and historical landmarks, including the Shirvanshah’s Palace.',
    imageUrl: '/IchS.JPG',
  },
  {
    id: 3,
    name: 'Heydar Aliyev Center',
    description: 'Designed by Zaha Hadid, the Heydar Aliyev Center is a stunning example of modern architecture. The flowing, curved form of the building is one of the most recognizable sights in Baku.',
    imageUrl: '/HAC.jpg',
  },
  {
    id: 4,
    name: 'Baku Boulevard',
    description: 'Baku Boulevard, also known as the Seaside National Park, is a beautiful promenade that stretches along the Caspian Sea. It is a popular spot for both locals and tourists, offering scenic views and leisure activities.',
    imageUrl: 'View_of_Baku.jpg',
  },
];

function OtherLandmarks() {
  return (
    <div className="landmarks-container2">
      <h1 className="landmarks-title2">Discover Other Landmarks in Baku</h1>
      {landmarks.map((landmark) => (
        <Link to={`/landmark/${landmark.id}`}>
          <div key={landmark.id} className="landmark-card2">
          <img src={landmark.imageUrl} alt={landmark.name} className="landmark-image2" />
          <div className="landmark-content2">
            <h2 className="landmark-name2">
              {landmark.name} 
            </h2>
            <p className="landmark-description2">{landmark.description}</p>
          </div>
        </div>
        </Link>
      ))}
    </div>
  );
}

export default OtherLandmarks;
