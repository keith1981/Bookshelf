import React, { Component } from 'react';
import {Router} from '@reach/router';
import Books from './components/Books';
import BookShelf from './components/BookShelf';
import './main.css';
import BigBook from './components/BigBook';




class App extends Component {
  constructor() {
    super();

    this.state = { books: [] }

    this.getBooks = this.getBooks.bind(this)
    
  }

  getBooks(book) {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&maxResults=30&key=enter_api_key`)
      .then(response => {
        return response.json();
      }).then(data => {
        this.setState({ books: data.items })
      }).catch(e => {
        alert("No Books!!", e)
      })
      
  }

  

  
  render() {
    return (
    <div>
      <Router>
        <Books path="/" userInput={this.getBooks}/>
        <BookShelf books={this.state.books} path="/bookshelf" />
        <BigBook path="/bigbook/:id/:title/:description" books={this.state.books} book={this.state.books.map(book => book.volumeInfo.imageLinks.thumbnail)} />
      </Router>
    </div>
    )
  }
}

export default App;
