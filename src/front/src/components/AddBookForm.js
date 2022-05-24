import React, { Component } from 'react'
import axios from 'axios'
import './AddBookForm.css'

class AddBookForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bookId: '',
            author:  '',
            title: '',
            country: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:8080/addBook', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { bookId, author, title, country } = this.state
        return (
            <div className="book-form-wraper">
                <form onSubmit={this.submitHandler} className="form">
                    <div>
                        <input type="text" name="bookId" value={bookId} placeholder="Book Id" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="author" value={author} placeholder="Author" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" value={title} placeholder="Title" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="country" value={country} placeholder="Country" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBookForm