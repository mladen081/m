import React, { Component } from 'react'
import axios from 'axios'
import './PostForm.css'

class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName:  '',
            email: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://localhost:8080/addLogin', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const { firstName, lastName, email, password } = this.state
        return (
            <div className="form-wraper">
                <form onSubmit={this.submitHandler} className="form">
                    <div>
                        <input type="text" name="firstName" value={firstName} placeholder="First Name" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="lastName" value={lastName} placeholder="Last Name" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="email" name="email" value={email} placeholder="Email" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="password" name="password" value={password} placeholder="Password" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm