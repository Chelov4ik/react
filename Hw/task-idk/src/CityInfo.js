import React from 'react';
import { Link } from 'react-router-dom';
import './CityInfo.css';

function CityInfo() {
  return (
    <div className="container">
      <h1 className="title">Welcome to Baku</h1>
      
      <section className="section">
        <h2 className="section-title" style={{fontSize: 50}}>About Baku</h2>
        <p className="section-text">
          Baku, the capital and largest city of Azerbaijan, is a dynamic and fascinating metropolis located on the western shore of the Caspian Sea. Known for its unique blend of ancient history and rapid modernization, Baku is one of the most vibrant cities in the Caucasus region.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Historical Overview</h2>
        <p className="section-text">
          Baku's history dates back over a thousand years, with evidence of human settlement in the area as far back as the Paleolithic era. The city has been an important cultural and economic center throughout its history, serving as a major hub for trade between Europe and Asia. Baku's Old City (Icherisheher), a UNESCO World Heritage site, is a testament to its rich past, featuring medieval architecture, narrow winding streets, and landmarks such as the Maiden Tower and the Palace of the Shirvanshahs.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Cultural Significance</h2>
        <p className="section-text">
          Baku is a city where East meets West, blending traditional Azerbaijani culture with influences from Persian, Ottoman, Russian, and European civilizations. This cultural diversity is reflected in the city's architecture, cuisine, music, and art. Baku is also a center for the arts, with numerous theaters, museums, and galleries. The city hosts the Baku International Jazz Festival, the Baku International Film Festival, and other cultural events that attract visitors from around the world.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Modern Baku</h2>
        <p className="section-text">
          In recent decades, Baku has undergone a dramatic transformation, with the development of modern infrastructure and the construction of striking new buildings. The Flame Towers, the Heydar Aliyev Center, and the Baku Crystal Hall are examples of contemporary architecture that define the city's skyline. Baku has also become a major center for international business, particularly in the oil and gas industry, which has driven much of its recent growth.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Landmarks and Attractions</h2>
        <ul className="landmark-list">
          <li className="landmark-item">
            <strong>Flame Towers:</strong> These three skyscrapers dominate Baku's skyline and symbolize the city's rapid development. The towers are covered with LED screens that create stunning visual displays, including images of flames, which are visible across the city.
          </li>
          <li className="landmark-item">
            <strong>Maiden Tower:</strong> A mysterious and ancient tower located in the Old City, the Maiden Tower is one of Baku's most iconic landmarks. Its origins and purpose are still debated by historians, adding to its allure.
          </li>
          <li className="landmark-item">
            <strong>Heydar Aliyev Center:</strong> Designed by the renowned architect Zaha Hadid, this cultural center is known for its futuristic and fluid design. It houses a museum, exhibition halls, and an auditorium.
          </li>
          <li className="landmark-item">
            <strong>Baku Boulevard:</strong> Stretching along the Caspian Sea, Baku Boulevard is a popular place for locals and tourists to relax. The boulevard is lined with parks, cafes, and entertainment venues, offering stunning views of the sea and the city.
          </li>
          <li className="landmark-item">
            <strong>The Old City (Icherisheher):</strong> A historic walled city that has been inhabited since the 12th century. The Old City is home to numerous historical monuments, including the Palace of the Shirvanshahs, narrow alleyways, traditional houses, and small shops selling local crafts.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Economy and Development</h2>
        <p className="section-text">
          Baku is the economic heart of Azerbaijan, largely due to its oil and gas reserves. The city has been a center for the oil industry since the 19th century, and its economy continues to thrive on energy exports. In addition to energy, Baku is also focusing on diversifying its economy through sectors like tourism, construction, and services.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Tourism</h2>
        <p className="section-text">
          Baku has become an increasingly popular destination for tourists, offering a mix of historical sites, modern attractions, and cultural experiences. The city's growing hospitality industry caters to a diverse range of visitors, from luxury travelers to backpackers. Events such as the Formula 1 Azerbaijan Grand Prix have also put Baku on the global map as a destination for sports and entertainment.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Conclusion</h2>
        <p className="section-text">
          Baku is a city of contrasts and a place where the past and future meet. Its rich history, cultural diversity, and modern development make it a unique and exciting destination for travelers. Whether you're exploring its ancient landmarks, enjoying its vibrant arts scene, or simply taking in the view of the Caspian Sea, Baku offers something for everyone.
        </p>
      </section>

      <section className="section">
  <h2 className="section-title">Explore More</h2>
  <div className="button-container">
    <div className="button-wrapper">
      <Link to="/famous-landmark" className="button flame-towers">
        Famous Landmark
      </Link> 
    </div>
    <div className="button-wrapper">
      <Link to="/other-landmarks" className="button maiden-tower">
        Other Landmarks
      </Link> 
    </div>
    <div className="button-wrapper">
      <Link to="/photos" className="button city-photos">
        City Photos
      </Link> 
    </div>
  </div>
</section>

    </div>
  );
}

export default CityInfo;
