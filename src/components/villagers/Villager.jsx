import React from 'react';
import PropTypes from 'prop-types';

const Villager = ({ name, image, quote, style, coffee }) => (
  <div className={style}>
    <img src={image} alt={name}  height="200px" />
    <h2 aria-label="heading">{name}</h2>
    <p>&quot;{quote}&quot;</p>
    <p>
      Coffee: {`
      ${coffee.roast} with 
      ${coffee.milk.toLowerCase()} and 
      ${coffee.sugar.toLowerCase()}.
      `}
    </p>
  </div>
);

export default Villager;

Villager.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  coffee: PropTypes.shape({
    roast: PropTypes.string.isRequired,
    milk: PropTypes.string.isRequired,
    sugar:PropTypes.string.isRequired
  })
};
