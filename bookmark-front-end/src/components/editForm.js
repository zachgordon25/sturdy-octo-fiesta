import React, { Component } from 'react'
import axios from 'axios';

class EditForm extends Component {
<<<<<<< HEAD
    constructor(props) {
        super(props);
        this.state={
            
=======
  constructor(props) {
    super(props);
    this.state = {
      // name: this.props.bookmarks.name,
      // url: this.props.book.url,
      // id: this.props.bookmark._id
>>>>>>> 8fe8b01330b0d5a04dbe319d46f0dbd6f35a5c10


    }
<<<<<<< HEAD
    handleChange(event) {
		const { name, value } = event.currentTarget;
		this.setState({
			[name]: value
		});
    }
    
    async handleSubmit(event) {
		event.preventDefault(); 
		const baseURL = this.props.baseURL;
		const response = await axios.put(`${baseURL}/bookmark/${this.state.id}`, {
			name: this.state.name,
			url: this.state.url
		});
		this.props.handleEditBookmarkShow(response.data);
		this.props.stopEditing();
    }
    render(){
        return() {
        <form className='editForm' onSubmit={this.handleSubmit}>
        <h3>Edit {this.props.bookmark.name}</h3>
        <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            onChange={this.handleChange}
            required={true}
            value={this.state.name}
        />
        <input
            type='url'
            id='url'
            name='url'
            placeholder='URL'
            onChange={this.handleChange}
            required={true}
            value={this.state.url}
        />
        <input type='submit' value='Save' />
    </form>
    }
}
=======

  }
  handleChange(event) {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.put(`${baseURL}/bookmark/${this.state._id}`, {
      name: this.state.name,
      url: this.state.url
    });
    this.props.handleEditBookmarkShow(response.data);
    this.props.stopEditing();
  }

>>>>>>> 8fe8b01330b0d5a04dbe319d46f0dbd6f35a5c10
}

export default EditForm;