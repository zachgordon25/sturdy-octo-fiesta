import React, { Component } from 'react'
import axios from 'axios'

let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:3003';
} else {
  baseURL = 'https://fathomless-sierra-68956.herokuapp.com';
}

class NewForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }
}

export default NewForm