import React, { Component } from 'react';

class SearchBar extends Component {
  // onInputChange(eventObject) {
  //   console.log(eventObject.target.value);
  // }
  constructor(props) {
    super(props);
    this.state = { term: 'Test' };
  }


  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={eventObject => this.setState({
            term: eventObject.target.value
          })}
        />
      </div>
    )
  }
}

export default SearchBar;