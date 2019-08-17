import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewForm from './components/NewForm';
import EditForm from './components/EditForm'
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
      bookmarks: [],
      bookmark: {}
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this)
    this.editBookmark = this.editBookmark.bind(this)
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

  async deleteBookmark(id) {
    await axios.delete(`${baseURL}/bookmark/${id}`);
    console.log('click')
    const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    })
    this.setState({
      bookmarks: filteredBookmarks
    })
  }


  editBookmark() {
    alert('clicked');
  }

  render() {
    return (
      <div className='container' >
        <div className='header'>
          <h1 className='webTitle'>Bookmarks</h1>
          {/* <NewForm getBookmarks={this.getBookmarks} /> */}
          <NewForm className='form' handleAddBookmark={this.handleAddBookmark} />
        </div>
        <table className='table'>
          <tbody>
            {this.state.bookmarks.map(bookmarks => {
              return (
                <tr key={bookmarks._id}>
                  <td> <a className='link' href={bookmarks.url}>
                    {bookmarks.title}</a></td>
                  <td className='delete' onClick={() => this.deleteBookmark(bookmarks._id)}>Delete</td>
                  <td onClick={() => this.editBookmark(bookmarks._id)}>Edit</td>

                </tr>
              );
            })}
          </tbody>
        </table>
        <EditForm />
      </div>
    );
  }
}

export default App;
