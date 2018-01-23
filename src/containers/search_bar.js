import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});

  }

  render() { 
    return (  
      // onSubmit gives us the oppurtunity to choose how the form will be submitted
      // remember event.preventDefault() as seen above
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          className='form-control'
          placeholder='Search for a city'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather}, dispatch);
}

// connecting the searchbar with redux
// we need null because mapDispatchToProps ALWAYS is the socond argument
export default connect(null, mapDispatchToProps)(SearchBar);
 
