import React from 'react'
import BookCard from './BookCard'



class BookCards extends React.Component {

  renderBooks() {
    return this.props.books.map(book =>
      <BookCard {...book} addToCart={this.props.addToCart} key={book.id} />
    )
  }

  render() {
    return (
      <>
      {this.renderBooks()}
      </>

    )
  }
}

export default BookCards
