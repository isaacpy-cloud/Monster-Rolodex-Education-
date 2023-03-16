import React, { Component } from 'react'

class SearchBox extends Component {
  render() {
    return (
      <div>
            <input className='search-box' type="search" placeholder="search monsters" onChange={this.props.onSearchChange} />
      </div>
    )
  }
}

export default SearchBox
