import React from 'react';
import CartItem from './CartItem';

const CheckoutCart = ({inCart, removeItemToCartFunc}) => {
  let booksInCart = inCart
    .map(book => <CartItem theSelectedItem={book}
      key={book.id}
      removeItem={removeItemToCartFunc}
    />
  )

  let total = inCart.reduce( (acc, item) => acc + item.price, 0)

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
      <div className="text-right">Total Price: ${total.toFixed(2)}</div>
    </div>
  )
}

export default CheckoutCart
