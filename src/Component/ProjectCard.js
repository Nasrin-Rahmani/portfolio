import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faS, faStar } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { FaReact } from 'react-icons/fa';

import { useState } from "react";
import "./projectCard.css"
export const ProjectCard = ({
  project: { title, imageSrc, description, skills,source, id },
}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
  <div>
    <div className="card-container" key={id}>
      <img className="card-img" src={imageSrc} ></img>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ul className="card-slills">
        <li className="card-skill" key={id}>
          {skills}
        </li>
      </ul>
      <div className="card-links">
        <a className="card-link" href={source}>
          Source
        </a>
      </div>
      <div className="rat-container">
        <div className="star-wgt">
          {[...Array(5)].map((star, index) => {
            const currentrating = index + 1;
            return (
              <label className="st-label">
                <input
                  type="radio"
                  name="rating"
                  value={currentrating}
                  onClick={() => setRating(currentrating)}
                />
                <FontAwesomeIcon
                  className="star"
                  icon={(faS, faStar)}
                  color={
                    currentrating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                  }
                  onMouseEnter={() => setHover(currentrating)}
                  onMouseLeave={() => setHover(null)}
                ></FontAwesomeIcon>
              </label>
            );
          })}
        </div>
        <p>Your Rating is {rating}</p>
      </div>
    </div>
   </div>
  );
}; 