import React, { useState } from "react";
import "../MovieCard/MovieCard.css";
import { Rate } from 'antd';

const MovieCard = ({ movieTitle, description, rating, posterUrl,prePosterUrl }) => {
  const [steps, setSteps] = useState(1);

  return (
    <div className="carddiv"
    
    >
      {steps === 1 ? (
        <div className="initialCard"
        onMouseEnter={() => setSteps(2)}
        >
          <div className="movieCard">
            <img
              className="imgtestInitial"
              src={posterUrl}
              alt="imagetest"
            />
          </div>
        </div>
      ) : (
        <div className="cardq"
        onMouseLeave={() => setSteps(1)}>
       
          <div className="movieCard">
            <img
              className="imgtest"
              src={prePosterUrl}
              alt="imagetest"
            />
            <div className="stilltesting">
            <div className="movieTitle">{movieTitle}</div>
            <div className="movieDescription">{description}</div>
            <div className="movieRating"><Rate disabled defaultValue={rating}/></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
