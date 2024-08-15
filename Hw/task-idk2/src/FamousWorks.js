import React from 'react';
import { Link } from 'react-router-dom';
import './FamousWorks.css';

const famousWorks = [
  { 
    title: "Hamlet", 
    description: "A tragedy about the Prince of Denmark, who seeks revenge against his uncle, who has murdered his father, taken the throne, and married his mother. The play explores themes of madness, betrayal, and the existential struggles of life."
  },
  { 
    title: "Macbeth", 
    description: "A tragedy about a Scottish general whose ambition leads him to treachery and murder. Spurred on by a prophecy from three witches and driven by his wife's ambition, Macbeth kills King Duncan and takes the throne, only to descend into paranoia and madness."
  },
  { 
    title: "Romeo and Juliet", 
    description: "A romantic tragedy about two young star-crossed lovers from feuding families in Verona. Their love leads to a secret marriage, but a series of misunderstandings and ill-fated events result in both lovers taking their own lives."
  },
  { 
    title: "Othello", 
    description: "A tragedy about jealousy and betrayal. Othello, a Moorish general in the Venetian army, is manipulated by his envious subordinate Iago into believing that his wife Desdemona has been unfaithful. Consumed by jealousy, Othello's actions lead to tragedy."
  },
  { 
    title: "A Midsummer Night's Dream", 
    description: "A comedic play featuring intertwined stories of love, magic, and transformation. Set in a mythical Athens and an enchanted forest, the play involves the adventures of four young lovers and a group of amateur actors, who are manipulated by the fairies of the forest."
  },
];


function FamousWorks() {
  return (
    <div className="content-container" style={{marginTop:50}}>
      <h1 className="title">Famous Works</h1>
      <div className="card-container">
        {famousWorks.map((work, index) => (
          <Link
            to={{
              pathname: `/works/${work.title}`,
            }}
            state={{ description: work.description }}
            key={index}
            className="card"
          >
            <div className="card-content">
              <h2 className="card-title">{work.title}</h2>
              <p className="card-description">{work.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FamousWorks;
