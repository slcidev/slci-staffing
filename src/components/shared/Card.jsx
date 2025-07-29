import React from "react";
import styled from "styled-components";

const Card = ({
  icon: Icon,
  title,
  description,
  iconSize = "48px",
  ariaLabel,
}) => {
  return (
    <StyledWrapper>
      <div className="card shadow hover:shadow-xl transition-all duration-300 ">
        <div className="card__front">
          {Icon && (
            <Icon
              className="icon"
              style={{ fontSize: iconSize }} // Dynamic icon size
              aria-label={ariaLabel || title} // Adding aria-label for accessibility
            />
          )}
          <p className="card__title">{title}</p>
        </div>
        <div className="card__back shadow-2xl bg-gradient-to-r from-blue-50 to-teal-50 border border-teal-100">
          <p className="card__description">{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 100%;
    aspect-ratio: 3 / 3;
    max-width: 100%;
    position: relative;
    // background-color: #f2f2f2;
    border-radius: 10px;
    overflow: hidden;
    perspective: 1000px;
    //  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .card__front,
  .card__back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 0.6s ease;
    border-radius: 10px;
  }

  .card__front {
    // background-color: #e3f2fd;
    background-color: #fafafa;
    z-index: 2;
    transform: rotateX(0deg);
  }

  .card__back {
    background-color: #ffffff;
    transform: rotateX(-90deg);
    transform-origin: bottom;
  }

  .card:hover .card__front {
    transform: rotateX(90deg);
  }

  .card:hover .card__back {
    transform: rotateX(0deg);
  }

  .icon {
    margin-bottom: 10px;
  }

  .card__title {
    font-size: 20px;
    font-weight: bold;
    color: #222;
    margin-bottom: 10px;
  }

  .card__description {
    font-size: 14px;
    color: #555;
    text-align: center;
  }
`;

export default Card;

/* import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M20 5H4V19L13.2923 9.70649C13.6828 9.31595 14.3159 9.31591 14.7065 9.70641L20 15.0104V5ZM2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934ZM8 11C6.89543 11 6 10.1046 6 9C6 7.89543 6.89543 7 8 7C9.10457 7 10 7.89543 10 9C10 10.1046 9.10457 11 8 11Z" />
        </svg>
        <div className="card__content">
          <p className="card__title">Card Title</p>
          <p className="card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 300px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
    box-shadow: 0 0 0 5px #ffffff80;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card svg {
    width: 48px;
    fill: #333;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
  }

  .card__content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    transform: rotateX(-90deg);
    transform-origin: bottom;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover .card__content {
    transform: rotateX(0deg);
  }

  .card__title {
    margin: 0;
    font-size: 24px;
    color: #333;
    font-weight: 700;
  }

  .card:hover svg {
    scale: 0;
  }

  .card__description {
    margin: 10px 0 0;
    font-size: 14px;
    color: #777;
    line-height: 1.4;
  }
`;

export default Card;
 */
