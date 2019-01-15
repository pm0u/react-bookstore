import React from 'react'


class BookCard extends React.Component {

  bookTitle = this.props.title

  onClick = (e) => {
    this.props.addToCart(this.props.id)
  }

  render() {
    return (
        <div className="col s12 m6 l4">
          <div className="card medium grey lighten-3">
            <div className="card-content">
              <span className="card-title activator">{this.props.title}<i className="material-icons right">more_vert</i></span>
              <p>{this.props.description}</p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">{this.props.title}<i className="material-icons right">close</i></span>
              <h6>{this.props.subtitle}</h6>
              <ul className='collection'>
                <li className='collection-item'>Publisher: {`${this.props.publisher}`}</li>
                <li className='collection-item'>Author: {`${this.props.author}`}</li>
                <li className='collection-item'>Price: {`$${this.props.price}`}</li>
                <li className='collection-item'>Pages: {`${this.props.pages}`}</li>
              </ul>
              <i onClick={this.onClick} style={{cursor:'pointer'}} className="material-icons left">add_shopping_cart</i><i className="material-icons right">link</i>
            </div>
          <div className="card-action">
            <i onClick={this.onClick} style={{cursor:'pointer'}} className="material-icons">add_shopping_cart</i><i className="material-icons right">link</i>
          </div>
        </div>
      </div>
    )
  }

}

export default BookCard
