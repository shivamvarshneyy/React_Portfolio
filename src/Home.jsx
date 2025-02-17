import React from 'react';
import Common from './Common';
import Footer from './Footer';
import lg1 from '../src/images/lg2.png';

const Home = () => {
  return (
    <>
        <Common title = "Grow your buisness with "
        imgsrc = {lg1}
        visit = "/service"
        btn = "Get Started"/>
        <Footer/>
    </>
  )
}

export default Home;
