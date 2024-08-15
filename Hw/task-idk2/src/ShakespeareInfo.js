import React from 'react';
import './ShakespeareInfo.css';

function ShakespeareInfo() {
  return (
    <div className="shakespeare-container" style={{marginTop:50}}>
    <h1 className="shakespeare-title">William Shakespeare: A Literary Titan</h1>
    
    <section className="shakespeare-section">
      <h2 className="shakespeare-section-title">Early Life and Career</h2>
      <p className="shakespeare-text">
        William Shakespeare, born in 1564 in Stratford-upon-Avon, England, is widely regarded as one of the most influential figures in the history of literature. Often referred to as the "Bard of Avon," Shakespeare's works encompass a vast range of genres, including tragedies, comedies, histories, and sonnets.
      </p>
      <p className="shakespeare-text">
        Shakespeare's early life is shrouded in mystery, with very few records detailing his childhood and education. It is believed that he attended the King's New School in Stratford, where he would have studied the basic elements of grammar, Latin, and literature.
      </p>
    </section>

    <section className="shakespeare-section">
      <h2 className="shakespeare-section-title">Shakespeare's Masterpieces</h2>
      <p className="shakespeare-text">
        Shakespeare's body of work includes some of the most famous plays ever written, such as:
      </p>
      <ul className="shakespeare-list">
        <li className="shakespeare-list-item"><strong>Hamlet:</strong> A tragedy that delves into themes of revenge, madness, and the consequences of indecision.</li>
        <li className="shakespeare-list-item"><strong>Romeo and Juliet:</strong> A tragic romance between two young lovers from feuding families.</li>
        <li className="shakespeare-list-item"><strong>Macbeth:</strong> A dark tale of ambition, power, and supernatural influence.</li>
        <li className="shakespeare-list-item"><strong>A Midsummer Night's Dream:</strong> A comedic fantasy that weaves together several interconnected plots involving love, magic, and the natural world.</li>
        <li className="shakespeare-list-item"><strong>Julius Caesar:</strong> A historical tragedy that explores themes of political power, loyalty, and betrayal.</li>
      </ul>
    </section>

    <section className="shakespeare-section">
      <h2 className="shakespeare-section-title">The Globe Theatre</h2>
      <p className="shakespeare-text">
        One of the most significant aspects of Shakespeare's legacy is his association with the Globe Theatre, an iconic venue in London that became synonymous with his work.
      </p>
    </section>

    <section className="shakespeare-section">
      <h2 className="shakespeare-section-title">Legacy and Influence</h2>
      <p className="shakespeare-text">
        Shakespeare's influence on the English language and literature cannot be overstated. He is credited with coining or popularizing hundreds of words and phrases still in use today.
      </p>
      <p className="shakespeare-text">
        Shakespeare's plays continue to be studied, performed, and adapted around the world. His works have inspired countless adaptations in film, television, and literature, proving the timeless nature of his stories and characters.
      </p>
    </section>
  </div>
  );
}

export default ShakespeareInfo;
