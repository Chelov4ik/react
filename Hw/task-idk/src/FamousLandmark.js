import React from 'react';
import './FamousLandmark.css';

function FamousLandmark() {
  return (
    <div className="landmark-container">
      <h1 className="landmark-title">Flame Towers: The Icon of Modern Baku</h1>
      
      <section className="landmark-section">
        <img src="/FlameT.jpg" alt="Flame Towers" className="landmark-image"/>
        <p className="landmark-description">
          The Flame Towers are a trio of skyscrapers in Baku, Azerbaijan, and are one of the city's most iconic landmarks. These towering structures, which resemble flames, symbolize the historical fire worshippers of the region and the energy-rich natural resources of Azerbaijan. The Flame Towers dominate the skyline of Baku, visible from various parts of the city and offering a striking contrast to the more traditional architecture found in the Old City.
        </p>
      </section>
      
      <section className="landmark-section">
        <h2 className="landmark-subtitle">Architecture and Design</h2>
        <p className="landmark-text">
          Designed by the architectural firm HOK, the Flame Towers are an excellent example of modern design blending with the cultural heritage of Azerbaijan. The towers are covered with LED screens that can display vibrant animations, including the flames that give the buildings their name. The tallest of the three towers stands at 190 meters, making it one of the tallest structures in Azerbaijan.
        </p>
      </section>

      <section className="landmark-section">
        <h2 className="landmark-subtitle">Function and Usage</h2>
        <p className="landmark-text">
          Each of the three towers has a distinct function. One tower is primarily residential, offering luxurious apartments with panoramic views of the city and the Caspian Sea. The second tower houses a hotel, providing world-class accommodations and amenities. The third tower is dedicated to commercial offices, making the Flame Towers a hub for both living and working in Baku. The complex also includes a variety of dining and entertainment options, making it a popular destination for both locals and tourists.
        </p>
      </section>

      <section className="landmark-section">
        <h2 className="landmark-subtitle">The Symbolism of Flames</h2>
        <p className="landmark-text">
          The flames depicted on the towers are more than just a nod to Azerbaijan's historical connection to fire. They represent the country’s nickname, the "Land of Fire," due to its natural gas reserves that have been burning for thousands of years. The towers’ design is a modern interpretation of this ancient symbol, blending the past with the present in a way that embodies the spirit of Baku.
        </p>
      </section>

      <section className="landmark-section">
        <h2 className="landmark-subtitle">Visiting the Flame Towers</h2>
        <p className="landmark-text">
          Visiting the Flame Towers is a must for anyone traveling to Baku. Whether you’re admiring the view from a distance, taking a closer look at the LED displays, or exploring the interiors, the Flame Towers offer a unique glimpse into the modern face of Azerbaijan. At night, the towers light up the Baku skyline with a dazzling display of colors, visible from across the city and even from the Caspian Sea.
        </p>
      </section>
    </div>
  );
}

export default FamousLandmark;
