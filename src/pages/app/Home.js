import React from 'react'
import Hero from '../../components/Layout/Hero/Hero';
import Items from '../../components/Layout/Items/Items';

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
