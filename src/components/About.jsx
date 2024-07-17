import React from 'react'
// import History from './History'
import Testimonial from './Testimonial'
import Availability from './Availability'
import Aboutfood from './Aboutfood'
import Footer from './Footer'
import Teams from './Teams'
import Header from './Header'

function About() {
  return (
       <div className="About">
        {/* <History /> */}
        <Testimonial />
        <Availability />
        <Aboutfood />
        <Teams />
        <Header />
    </div>
  )
}

export default About
