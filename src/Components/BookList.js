import React, { Component } from 'react';
import BookItem from './BookItem';

class BookList extends Component {
  state = {
    searchInput: ''
  }

  handleInputChange = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  handleClick = (e) => {
    this.props.addItemToCartFunc(e.target.id)
  }

  render() {
    let listOfBooks = this.props.allBooks
    .filter(book =>
      book.title.toLowerCase().includes(this.state.searchInput) || book.author.toLowerCase().includes(this.state.searchInput))
    .map(book => <BookItem key={book.id} book={book} addToCart={this.handleClick}/>)

    return (
      <div>
        <h1>Books</h1>
        <input type="text"
          onChange={this.handleInputChange}
          className="form-control"
          name="searchBar"
          placeholder="Search by Title or Author"
        />
        {listOfBooks}
      </div>
    )
  }

}

export default BookList
