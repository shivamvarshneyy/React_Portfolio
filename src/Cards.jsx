import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = (props) => {
  return (
    <>
        <div className="col-lg-4 col-md-6 col-sm-10 mx-auto">
          <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt="card-img" width={250} height={350} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.content}</p>
              <NavLink to={props.link} className="btn btn-dark">{props.btn}</NavLink>                   
            </div>
          </div>
        </div>
    </>
  )
}

export default Cards;
