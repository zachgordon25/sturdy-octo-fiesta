import React, { Component } from 'react'
import axios from 'axios';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            // name: this.props.bookmarks.name,
            // url: this.props.book.url,
            // id: this.props.bookmark._id

            
        }

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
		const response = await axios.put(`${baseURL}/bookmark/${this.state.id}`, {
			name: this.state.name,
			url: this.state.url
		});
		this.props.handleEditBookmarkShow(response.data);
		this.props.stopEditing();
	}
    
}

export default editForm;