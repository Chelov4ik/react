import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

function Home() {
  return (
    <div className="container" style={{marginTop:50}}>
      <h1 className="title">Welcome to the Shakespeare Hub</h1>
      
      <section className="section">
        <h2 className="section-title">Explore the World of Shakespeare</h2>
        <p className="section-text">
          William Shakespeare, often referred to as England's national poet, is widely considered the greatest dramatist of all time. His works have been translated into every major living language and are performed more often than those of any other playwright.
        </p>
        <img src='/Shakespeare.jpg' alt="William Shakespeare" className="section-image" />
        <p className="section-text">
          Shakespeare's works explore complex themes such as the nature of power, love, jealousy, betrayal, and the human condition. His rich vocabulary and vivid characters have left an indelible mark on English literature and culture.
        </p>
      </section>

      <section className="section">
        <h2 className="section-title">Explore More</h2>
        <div className="button-container">
          <div className="button-wrapper">
          <img src='/Shakespeare.jpg' alt="About Shakespeare" className="button-image" />
            <Link to="/shakespeare" className="button">
              About Shakespeare
            </Link>
            
          </div>
          <div className="button-wrapper">
            <img src='/hisWork.jpg' alt="Famous Works" className="button-image" />
            <Link to="/works" className="button">
              Famous Works
            </Link>
          </div>
          <div className="button-wrapper">
            <img src='/glob.jpg' alt="Globe Theatre" className="button-image" />
            <Link to="/globe-theatre" className="button">
              Globe Theatre
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
