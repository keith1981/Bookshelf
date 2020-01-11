import React, {Component} from 'react';
import {navigate} from '@reach/router';





class Book extends Component {

    handleSource = ()=> {
        navigate(`/bigbook/${this.props.id}/${this.props.title}/${this.props.des}`)

        
    }

    render() {
        return (
            <div className="image">
                <img src={this.props.books} id={this.props.id} onClick={this.handleSource} alt="book" />
            </div>
        )
    }
}

export default Book;