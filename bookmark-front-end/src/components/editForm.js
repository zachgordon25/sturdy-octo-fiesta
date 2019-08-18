import React, { Component } from 'react'
import axios from 'axios';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            

            
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
    render(){
        return(    

            <form className='editForm' onSubmit={this.handleSubmit}>
            <h3>Edit {this.props.bookmark.name}</h3>
            <input
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                onChange={this.handleChange}
                
            />
            <input
                type='url'
                id='url'
                name='url'
                placeholder='URL'
                onChange={this.handleChange}
               
            />
            <input type='submit' value='Save' />
        </form>
        
        ) 
}
}

export default EditForm;