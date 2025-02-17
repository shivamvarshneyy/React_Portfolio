import React from 'react';
import Common from './Common';
import Footer from './Footer';
import lg3 from '../src/images/lg1.png';

const About = () => {
  return (
    <>
        <Common title = "Welcome to About page "
        imgsrc = {lg3}
        visit = "/contact"
        btn = "Contact Now"/>
        <Footer/>
    </>
  )
}

export default About;
