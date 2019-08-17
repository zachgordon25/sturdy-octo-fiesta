import React, { Component } from 'react'

class EditForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({
      open: true
    })
    console.log('modal open')
  }

  closeModal() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>
        <h1>Modal</h1>
        <button onClick={this.openModal}>Open</button>
      </div>
    )
  }
}

export default EditForm