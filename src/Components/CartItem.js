import React from 'react';

const CartItem = ( {theSelectedItem, removeItem}) => {

  return (
    <div className="list-group" key={theSelectedItem.id}>
      <div className="list-group-item">
        <div className="row">
          <div className="col-sm-10 col-md-10">{theSelectedItem.title}</div>
          <div className="col-sm-2 col-md-2">${theSelectedItem.price.toFixed(2)}</div>
          <button onClick={() => removeItem(theSelectedItem.id)} >Remove</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
