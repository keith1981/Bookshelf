import React, { Component } from 'react';
import {Link, navigate} from '@reach/router';
import {FaBook} from 'react-icons/fa';


class Books extends Component {
    constructor() {
        super();

        this.state = { title: '', error: '' }

        this.handleFormSubmit = this.handleFormSubmit.bind(this)
    }

    getTitle = (e) => {
        this.setState({ title: e.target.value })
    }

    handleFormSubmit(e) {
        e.preventDefault();
        let message = "Please enter a book title"
        if(this.state.title === '') {
            this.setState({ error: message })
        } else {
            this.props.userInput(this.state.title)

            this.setState({ title: ''})

            navigate('/bookshelf')
        }

    }

    render() {
        return(
        <div className="container">
            <ul className="nav">
                <Link to="/">
                    <FaBook className="icon"/>
                </Link>
                <Link id="link" to="/bookshelf">BookShelf</Link>
            </ul>
            <form className="book-form" onSubmit={this.handleFormSubmit}>
                <label className="book-title" htmlFor="title">Enter a Book Title:</label>
                <input className="book-input" type="text" value={this.state.title} onChange={this.getTitle} placeholder="Please enter a book title..."/>
                <h6 className="error-msg">{this.state.error}</h6>
            </form>
        </div>
        )
    }
}

export default Books;