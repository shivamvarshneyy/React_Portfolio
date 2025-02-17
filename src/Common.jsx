import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
        <section id="header" className="d-flex align-items-center justify-content-center">
          <div className="container-fluid">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row">
                  <div className="data-common col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.title} <strong className="brand-name">Shivam Varshney</strong></h1>
                    <h3 className="my-3">We are the team of talented devlopers making Websites</h3>
                    <div className="mt-3">
                      <NavLink to={props.visit} className="btn btn-outline-dark">{props.btn}</NavLink>
                    </div>
                  </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated image" alt="Common img"/>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Common;
