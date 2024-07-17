import React from 'react'
import Header from './Header'
import Aboutfood from './Aboutfood'
import Reveiws from './Reviews'
import Teams from './Teams'
import History from './History'
import Testimonial from './Testimonial'
import Availability from './Availability'
import Menucard from './Menucard';
import Subs from "./Subs";
import Footer from './Footer'

function Home() {
  return (
    <div className="Home">
        <Header />
        <Aboutfood />
        <Reveiws />
        <Teams />
        <History />
        <Testimonial />
        <Availability />
        <Menucard />
        <Subs />
    </div>
  )
}

export default Home
