import React from 'react'

const Item = ({productName, images, prices, description}) => {
  return (
    <div>
      <div className="item--area">
        <img src={images[0]} alt="" className="item--image" />
        <h2 className="item--name">{productName}</h2>
        <h2 className="item--price">{prices[0].amount}</h2>
      </div>
    </div>
  );
}

export default Item
