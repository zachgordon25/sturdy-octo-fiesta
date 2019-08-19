import React, { Component } from 'react';
import axios from 'axios';

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

class NewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.currentTarget.id]: event.currentTarget.value });
  }
  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.post(`${baseURL}/bookmark`, {
      title: this.state.title,
      url: this.state.url
    });
    // this.setState({ title: '' });
    /// trying to figure out
    // this.props.getBookmarks(response.data);
    this.props.handleAddBookmark(response.data);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='title' />
        <input
          type='text'
          id='title'
          name='title'
          onChange={this.handleChange}
          value={this.state.title}
          placeholder='website'
        />
        <input
          type='text'
          id='url'
          name='url'
          onChange={this.handleChange}
          value={this.state.url}
          placeholder='http:// '
        />
        <input class='inputBtn' type='submit' vaule='Add a website' />
      </form>
    );
  }
}

export default NewForm;
