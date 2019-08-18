import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewForm from './components/newForm';
import Modal from './components/Modal/Modal';
import EditForm from './components/editForm'

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
      bookmark: {},
      isShowing: false
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
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
    console.log('click');
    const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    this.setState({
      bookmarks: filteredBookmarks
    });
  }

  openModalHandler = () => {
    this.setState({
      isShowing: true
    });
  };

  closeModalHandler = () => {
    this.setState({
      isShowing: false
    });
  };

  // toggleModal =()=>{
  //   this.setState(prevState=>{
  //     isShowing: !prevState.isShowing
  //   })
  // }

  render() {
    return (
      <div className='container'>
        <div className='header'>
          <h1 className='webTitle'>Bookmarks</h1>
          {/* <NewForm getBookmarks={this.getBookmarks} /> */}
          <NewForm
            className='form'
            handleAddBookmark={this.handleAddBookmark}
          />
        </div>
        <table className='table'>
          <tbody>
            {this.state.bookmarks.map(bookmarks => {
              return (
                <tr key={bookmarks._id}>
                  <td>
                    {' '}
                    <a className='link' href={bookmarks.url}>
                      {bookmarks.title}
                    </a>
                  </td>
                  <td
                    className='delete'
                    onClick={() => this.deleteBookmark(bookmarks._id)}
                  >
                    Delete
                  </td>
                  Modal
                  <td>
                    {this.state.isShowing ? (
                      <div
                        onClick={this.closeModalHandler}
                        className='back-drop'
                      />
                    ) : null}

                    <button
                      className='open-modal-btn'
                      onClick={this.openModalHandler}
                    >
                      Edit
                    </button>

                    <Modal
                      className='modal'
                      show={this.state.isShowing}
                      close={this.closeModalHandler}
                    >
                      <EditForm key={bookmarks._id} title={bookmarks.title} />
                    </Modal>
                  </td>
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
