import React, { useState } from 'react';
import Footer from './Footer';


const Contact = () => {
  const [data, setData] = useState({
    fullname : '',
    phone : '',
    email : '',
    message : ''
  });

  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((preValue) => {
      return{
        ...preValue,
        [name] : value
      }
    });
  }

  const setEvent = (event) =>{
    // event.preventDefault()
    alert(`Your Details are Submitted Successfully :

      Name : ${data.fullname}
      Phone : ${data.phone}
      Email : ${data.email}
      Message : ${data.message}
      `)
  }

  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <form onSubmit={setEvent} autoComplete='off'>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
          <div className="mb-3">
            <label htmlFor="FullName" className="form-label">FullName</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" required name='fullname' value={data.fullName} placeholder="Enter your FullName" onChange={inputEvent}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Phone" className="form-label">Phone</label>
            <input type="number" className="form-control" id="exampleFormControlInput1" required name='phone' value={data.phone} placeholder="Enter your Mobile Number" onChange={inputEvent}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" required name='email' value={data.email} placeholder="name@example.com" onChange={inputEvent}/>
          </div>
          <div className="mb-3">
            <label htmlFor="Message" className="form-label">Message</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required name='message'  value={data.message} placeholder="Message" onChange={inputEvent}></textarea>
          </div>
          <div className="col-12">
            <button className="btn btn-outline-primary" type="submit">Submit form</button>
          </div>
          </div>
        </div>
      </div>
      </form>
      <Footer/>
    </>
  )
}

export default Contact;
