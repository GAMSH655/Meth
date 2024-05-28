import React from 'react'
import Hero from "../Ui/HomeUI/Hero"
import Trending from "../Ui/HomeUI/Trending"
import Creator from "../Ui/HomeUI/Creator"
import Categories from '../Ui/HomeUI/Categories'
import Discover from '../Ui/HomeUI/Discover'
import Work from "../Ui/HomeUI/Work"
export const Home = () => {
  return (
    <div>
       <Hero/>
       <Trending/>
       <Creator/>
       <Categories/>
       <Discover/>
       <Work/>
    </div>
  )
}
export default Home  