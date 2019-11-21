import React from 'react'
import Hero from '../Hero';
import Items from '../Items/Items';

const Home = () => {
  return (
  <div>
    <Hero />
    <div className="main">
      <div>
        <Items />
      </div>
    </div>
  </div>
  )
}

export default Home;
