import React from 'react'
import { transparentBg } from '../styles/index'
import { ReactRouter, Link } from 'react-router'

class Home extends React.Component {
  render () {
    return (
      <div className='jumbotron col-sm-12 text-center' style={transparentBg}>
        <h1>Github Battle</h1>
        <p className='lead'>Some fancy motto</p>
        <Link to='/playerOne'>
          <button type='button' className='btn btn-lg btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
}

export default Home
