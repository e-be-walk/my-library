import React, { Component } from 'react';


class Book extends Component {
  constructor() {
    super()

    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this)
  }

  increment() {
    let state = this.state
    state.counter += 1

    this.setState(state)
  }

  render() {
    const { counter } = this.state
    const { title, link, authors, description } = this.props.book

    return (
      <div>
      <div className='col-3 my-4'>
        <div className='card'>
          <div className='card-title'>
            <a href={link}><h3>{title}</h3></a>
          </div>
          <div className='card-authors'>
            <h3>{authors}</h3>
          </div>
          <div className='scroll-box'>
            <p>{description}</p><br></br>
          </div>
        <button onClick={this.increment}>Counter {counter}</button>
              </div>
            </div>
      </div>
    )
  }
}

export default Book
