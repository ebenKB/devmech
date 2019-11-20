import React from 'react'
import {Link} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className="nav">
      <ul className="nav-links">
        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
