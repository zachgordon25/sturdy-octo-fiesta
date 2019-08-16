import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewForm from './components/newForm';
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

console.log('current base URL:', baseURL);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
  }

  componentDidMount() {
    this.getBookmarks();
  }

  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmark`);
    const bookmarks = response.data;
    this.setState({
      bookmarks: bookmarks
    });
    console.log(this.state.bookmarks);
  }

  handleAddBookmark(bookmark) {
    this.setState({
      bookmarks: [...this.state.bookmarks, bookmark]
    });
  }

  render() {
    return (
      <div className='container'>
        <h1>Test</h1>
        <NewForm getBookmarks={this.getBookmarks} />
        <table>
          <tbody>
            {this.state.bookmarks.map(bookmarks => {
              return (
                <tr key={bookmarks._id}>
                  <a href={bookmarks.url}>
                    <td>{bookmarks.title}</td>
                  </a>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
