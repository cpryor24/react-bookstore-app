import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BookList from './Components/BookList';
import CheckoutCart from './Components/CheckoutCart';

class App extends Component {
  state = {
    books: [],
    cartItems: []
  }

  componentDidMount() {
    axios.get('http://localhost:8082/api/books')
      .then(res => this.setState({
        books: res.data
      }))
  }

  addItemToCart = (id) => {
    let bookFiltered = this.state.books.filter( (book) => book.id == id)
    return this.setState({
      cartItems: [...this.state.cartItems, bookFiltered]
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <BookList
                allBooks={this.state.books}
                addItemToCartFunc={this.addItemToCart}
              />
            </div>
            <div className="col-md-5">
              <CheckoutCart cart={this.state.cartItems} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
