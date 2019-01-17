import React, { Component } from 'react';
import './App.css';
import BookCards from './BookCards'
import SearchBar from './SearchBar'
import SideNavCart from './SideNavCart'

class App extends Component {

  state = {
    books: [],
    activeBooks: [],
    cart: []
  }

  async componentDidMount() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/books`)
    const books = await response.json()
    this.setState(prevState => {
      return { books, activeBooks: books }
    })
  }

  filterBooks = (term) => {
    let filteredBooks = this.state.books.filter(book => book.title.toLowerCase().includes(term.toLowerCase()) || book.author.toLowerCase().includes(term.toLowerCase()))
    this.setState(prevState => {
      return { activeBooks: filteredBooks }
    })
  }

  addToCart = (bookId) => {
    this.setState(prevState => {
      return { cart: [...prevState.cart, prevState.books[bookId-1]] }
    })
  }



  render() {
    return (
      <main>
        <SearchBar filterBooks={this.filterBooks}/>
        <SideNavCart cart={this.state.cart}/>
        <div className='row'>
        <BookCards addToCart={this.addToCart} books={this.state.activeBooks} />
        </div>
      </main>
    );
  }
}

export default App;
