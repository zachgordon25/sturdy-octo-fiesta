import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import NewForm from './components/newForm';
<<<<<<< HEAD
import Modal from './components/Modal';
=======
import Modal from './components/Modal/Modal';

>>>>>>> c2e774f32446f6a77f8491d775bde890eab8558f
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
<<<<<<< HEAD
      modalOpen: false
=======
      isShowing: false
>>>>>>> c2e774f32446f6a77f8491d775bde890eab8558f
    };
    this.getBookmarks = this.getBookmarks.bind(this);
    this.handleAddBookmark = this.handleAddBookmark.bind(this);
    this.deleteBookmark = this.deleteBookmark.bind(this);
<<<<<<< HEAD
    this.editBookmark = this.editBookmark.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
=======
>>>>>>> c2e774f32446f6a77f8491d775bde890eab8558f
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

<<<<<<< HEAD
  editBookmark() {
    alert('clicked');
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
    console.log('modal open');
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
    console.log('modal closed');
  }
=======
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
>>>>>>> c2e774f32446f6a77f8491d775bde890eab8558f

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
<<<<<<< HEAD
                  <td onClick={() => this.editBookmark(bookmarks._id)}>Edit</td>
=======

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
                      <NewForm
                        className='form'
                        handleAddBookmark={this.handleAddBookmark}
                      />
                    </Modal>
                  </td>
>>>>>>> c2e774f32446f6a77f8491d775bde890eab8558f
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
