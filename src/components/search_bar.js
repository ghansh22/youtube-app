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
      <div>
        <input onChange={eventObject => this.setState({
          term: eventObject.target.value
        })}
        />
        <h2>
          Value of the input : {this.state.term}
        </h2>
      </div>
    )
  }
}

export default SearchBar;