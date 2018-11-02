import React from 'react';

let BookItem = ({book, addToCart}) => {

  return (
    <div className="card list-of-books" key={book.id}>
      <div className="card-body">
        <h5 className="card-title">Title: {book.title}</h5>
        <h6 className="card-text">Subtitle: {book.subtitle}</h6>
        <p className="card-text"><b>Description:</b> {book.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Author:</b> {book.author}</li>
        <li className="list-group-item"><b>Pages:</b> {book.pages}</li>
        <li className="list-group-item"><b>Price:</b> ${book.price.toFixed(2)}</li>
      </ul>
      <div className="card-body">
        <a href={book.website} rel="noopener noreferrer" target="_blank" className="btn btn-primary">View Book</a>&nbsp;
        <button className="btn btn-primary" onClick={addToCart} id={book.id} >Add to Cart</button>
      </div>
    </div>
  )
}

export default BookItem
