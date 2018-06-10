import React, { Component } from 'react';

class SearchBar extends Component {
  // onInputChange(eventObject) {
  //   console.log(eventObject.target.value);
  // }

  render() {
    return <input onChange={eventObject => console.log(eventObject.target.value)} />
  }
}

export default SearchBar;