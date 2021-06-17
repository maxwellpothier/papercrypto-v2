import React from 'react';
import '../styles/CoinCard.css';

const CoinCard = ({ icon, name, price, cap, alt }) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  const formatPrice = formatter.format(price);
  const formatCap = formatter.format(cap);

  return (
    <div className="container">
      <img className="icon" src={icon} alt={alt} />
      <div className="name">{name}</div>
      <div className="price">{formatPrice}</div>
      <div className="cap">{formatCap}</div>
    </div>
  );
}

export default CoinCard;