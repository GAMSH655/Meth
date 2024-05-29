import React from 'react'
import Hero from "../Ui/HomeUI/Hero"
import Trending from "../Ui/HomeUI/Trending"
import Creator from "../Ui/HomeUI/Creator"
import Categories from '../Ui/HomeUI/Categories'
import Discover from '../Ui/HomeUI/Discover'
import Work from "../Ui/HomeUI/Work"
import Header from "../Components/Headers"
import Footer from "../Components/Footer"
export const Home = () => {
  return (
    <div>
      {/* <Header/> */}
       <Hero/>
       <Trending/>
       <Creator/>
       <Categories/>
       <Discover/>
       <Work/>
       <Footer/>
    </div>
  )
}
export default Home  