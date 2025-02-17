import React from 'react';
import Data from './Data';
import Cards from './Cards';
import Footer from './Footer';



const Service = () => {
  return (
    <>
        <div className="my-5">
          <h1 className="text-center"> Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
              {Data.map((value)=> (
                <Cards
                key = {value.id}
                imgsrc = {value.imgsrc}
                title = {value.title}
                content = {value.content}
                link = {value.link}
                btn = {value.btn}
              />
              ))};
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  )
}

export default Service;


