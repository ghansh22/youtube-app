import React, { Component } from 'react';

class SearchBar extends Component {
  onInputChange(eventObject) {
    console.log(eventObject.target.value);
  }

  render() {
    return <input onChange={this.onInputChange} />
  }
}

export default SearchBar;