import React, { Component } from 'react';

class SearchBar extends Component {

  onChange = (e) => {
    e.preventDefault()
    let searchTerm=e.target.value
    this.props.filterBooks(searchTerm)
  }

  onClose = () => {
    let searchBox = document.getElementById('search')
    searchBox.value=''
  }

  render() {
    return (
      < >
      <nav>
        <div className="nav-wrapper">
          <div className='row'>
            <div className='col s10'>
            <form>
            <div className="input-field">
              <input onChange={this.onChange} id="search" type="search" required />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons closed">close</i>
            </div>
          </form>
        </div>
        <div className='col s2'>
            <span data-target="slide-out" className="sidenav-trigger right" style={{cursor:'pointer'}}><i className="material-icons">shopping_cart</i></span>
    </div>
  </div>
        </div>
      </nav>
      < />
    );
  }

}

export default SearchBar;
