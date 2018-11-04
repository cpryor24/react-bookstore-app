import React, { Component } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import Footer from './Components/Footer';
import BookList from './Components/BookList';
import CheckoutCart from './Components/CheckoutCart';

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    axios.get('http://localhost:8082/api/books')
      .then(res => this.setState({
        books: res.data
      }))
  }

  inCart = () => this.state.books.filter(book => book.inCart)

  addItemToCart = (id) => { // New
    axios.patch(`http://localhost:8082/api/books/cart/add/${id}`)
      .then(res => {
        let otherBooks = this.state.books.filter( book => book.id !== parseInt(id))
        let orderedBooks = [...otherBooks, res.data].sort((a, b) => a.id > b.id)
        this.setState({ books: orderedBooks })
      })
  }

  removeItemToCart = (id) => { // New
    axios.patch(`http://localhost:8082/api/books/cart/remove/${id}`)
      .then(res => {
        let otherBooks = this.state.books.filter( book => book.id !== parseInt(id))
        let orderedBooks = [...otherBooks, res.data].sort((a, b) => a.id > b.id)
        this.setState({ books: orderedBooks })
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
              <CheckoutCart inCart={this.inCart()}  removeItemToCartFunc={this.removeItemToCart}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
