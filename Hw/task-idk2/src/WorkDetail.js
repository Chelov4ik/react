import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './WorkDetail.css';

function WorkDetail() {
  const { title } = useParams();
  const location = useLocation();
  const { description } = location.state || {};  

  return (
    <div className="detail-container" style={{marginTop:50}}>
      <h1 className="detail-title">{title}</h1>
      <p className="detail-text">{description}</p>
    </div>
  );
}

export default WorkDetail;
