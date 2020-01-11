import React, { Component } from 'react';


class BigBook extends Component {
    showBigBook = () => {
        
        return (
            <div>
                <img className='bigBook' src={this.props.book.filter(book => book.includes(this.props.id))} alt="big" />
                <h6>{this.props.description}</h6>
            </div>
        )
    }
    
    render() {
        return (
        <div className="bigBook-container">
            <h1>{this.props.title}</h1>
            {this.showBigBook()}
        </div>
        )
    }
}

export default BigBook;