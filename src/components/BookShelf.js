import React, { Component } from 'react';
import Book from './Book';
import { navigate } from '@reach/router';

class BookShelf extends Component {
    
    showBooks = () => {
        return (
            this.props.books.map(book => (
                <Book key={book.id} id={book.id} books={book.volumeInfo.imageLinks.thumbnail} title={book.volumeInfo.title} des={book.volumeInfo.description}/>
            ))
        )
    }

    goHome = () => {
        navigate('/')
    }

    
    render() {
        return(
            <div className="main-container">
                <div className="bookshelf-container">
                    <button className="home" onClick={this.goHome}>Home</button>
                    <h1>BookShelf</h1>
                </div>
                <ul className="book">
                    {this.props.books.length === 0 ? <h1>No Books</h1> : this.showBooks()}
                </ul>
            </div>
        )
    }
}

export default BookShelf;