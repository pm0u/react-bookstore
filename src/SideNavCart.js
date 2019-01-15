import React, { Component } from 'react';

class SideNavCart extends Component {

  renderCartItems = () => {
    if (this.props.cart.length === 0) {
      return <li className='center'>Nothing in cart!</li>
    } else {
    return this.props.cart.map((cartItem,i) => {
      let newCartItemTitle = ''
      if (cartItem.title.length > 30)
        newCartItemTitle = cartItem.title.substring(0,30)+'...';
      else
        newCartItemTitle = cartItem.title
      return <li key={i} style={{padding:'5px'}}><span>{newCartItemTitle}</span><span className='right'>{`$${cartItem.price}`}</span></li>
    })
  }
  }
  renderTotal = () => {
    let total = this.props.cart.reduce((total, item) => {
      total += item.price
      return total
    }, 0)
    return (
      <li>Total: <span className='right'>{`$${total}`}</span></li>
    )

  }

  render() {
    return (
      <div>
        <ul id="slide-out" className="sidenav">
          <li><h3 className='center'>Cart</h3></li>
          <li><hr/></li>
          {this.renderCartItems()}
          <li><hr/></li>
          {this.renderTotal()}
        </ul>
      </div>
    );
  }

}

export default SideNavCart;
