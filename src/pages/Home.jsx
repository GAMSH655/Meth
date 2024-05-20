import React from 'react'
import Hero from "../Ui/Hero"
import Trending from "../Ui/Trending"
import Creator from "../Ui/Creator"
import Categories from '../Ui/Categories'
import Discover from '../Ui/Discover'
export const Home = () => {
  return (
    <div>
       <Hero/>
       <Trending/>
       <Creator/>
       <Categories/>
       <Discover/>
    </div>
  )
}
export default Home  