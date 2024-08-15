import React from 'react';
import { useParams } from 'react-router-dom';
import './LandmarkDetails.css';

const landmarksData = [
  {
    id: 1,
    title: 'Maiden Tower',
    image: '/tower.png',
    description: 'The Maiden Tower is a 12th-century monument and a symbol of Baku, rich in history and legend. Standing at 30 meters tall, it features a unique cylindrical shape and has been part of the city’s skyline for centuries. Visitors can explore its interior, which includes several levels and a viewing platform that offers stunning views of the Old City and the Caspian Sea. The tower is part of the UNESCO World Heritage site and attracts tourists for its historical significance and architectural beauty.',
  },
  {
    id: 2,
    title: 'Old City (Icherisheher)',
    image: '/IchS.JPG',
    description: 'The Old City, or Icherisheher, is the historical core of Baku, rich in architectural and historical landmarks. This ancient walled city features narrow cobblestone streets, traditional houses, and various significant sites, including the Palace of the Shirvanshahs and the Juma Mosque. It is a UNESCO World Heritage site, and its atmosphere transports visitors back in time, allowing them to experience the rich cultural heritage of Azerbaijan.',
  },
  {
    id: 3,
    title: 'Heydar Aliyev Center',
    image: '/HAC.jpg',
    description: 'Designed by renowned architect Zaha Hadid, the Heydar Aliyev Center is a stunning example of modern architecture, characterized by its fluid, curved lines. Completed in 2012, this cultural center houses a museum, exhibition halls, and an auditorium. The building\'s design reflects Azerbaijan’s contemporary spirit while also honoring its cultural roots. The center regularly hosts exhibitions, concerts, and cultural events, making it a vibrant hub for the arts in Baku.',
  },
  {
    id: 4,
    title: 'Baku Boulevard',
    image: 'View_of_Baku.jpg',
    description: 'Baku Boulevard is a beautiful promenade that stretches along the Caspian Sea, popular among locals and tourists. This scenic waterfront area is lined with parks, cafes, and entertainment venues, providing a perfect place for leisurely walks, picnics, and family outings. The boulevard features attractions like the Baku Ferris Wheel, the Carpet Museum, and various sculptures, offering a blend of nature and culture. It is especially stunning at sunset, when visitors can enjoy breathtaking views of the skyline and the sea.',
  },
];

function LandmarkDetails() {
  const { id } = useParams();  
  const landmark = landmarksData.find(l => l.id === parseInt(id));  

  if (!landmark) {
    return <h2>Landmark not found</h2>;  
  }

  return (
    <div className="landmark-details">
      <h1 className="landmark-title">{landmark.title}</h1>
      <img src={landmark.image} alt={landmark.title} className="landmark-image"/>
      <p className="landmark-description">{landmark.description}</p>
    </div>
  );
}

export default LandmarkDetails;
