import React, { Component } from 'react';

class SearchBar extends Component {
  // onInputChange(eventObject) {
  //   console.log(eventObject.target.value);
  // }
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }


  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={eventObject => this.onInputChange(eventObject.target.value)}
        />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSerchTermChange(term);
  }
}

export default SearchBar;