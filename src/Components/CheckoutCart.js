import React from 'react';
import CartItem from './CartItem';

const CheckoutCart = ({cart}) => {
  let booksInCart = cart.map(book => <CartItem theSelectedItem={book[0]} key={book[0].id}/>)

  /*let totalAmount = () => {
    let total = cart.map(item => parseInt(item[0].price) )
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    let cost = total.reduce(reducer)
    return cost
  }*/

  return (
    <div className="container">
      <h1>Checkout Cart</h1>
      <div className="list-group">
        <div className="list-group-item">
          <div className="row">
            <div className="col-sm-6 col-md-10">Title</div>
            <div className="col-sm-6 col-md-2">Price</div>
          </div>
        </div>
        {booksInCart}
      </div>
      <div className="text-right">Total Price: ${}</div>
    </div>
  )
}

export default CheckoutCart
