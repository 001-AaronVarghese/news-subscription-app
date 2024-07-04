import React from 'react'
import Navbar from './Navbar'

const Add_Sub = () => {
  return (
    <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Subscriber Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Email ID</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">District</label>
                                 <select name="" id="" className="form-select">
                              <option value="Select district">Select District</option>
                              <option value="Thiruvananthapuram">Alappuzha</option>
                              <option value="Kollam">Kollam</option>
                              <option value="Pathanamthitta">Palakad</option>
                              <option value="Alappuzha">Thiruvananthapuram</option>
                              <option value="Kottayam">Kottayam</option>
                              <option value="Idukki">Idukki</option>
                              <option value="Ernakulam">Ernakulam</option>
                              <option value="Thrissur">Thrissur</option>
                              <option value="Palakkad">Pathanamthitta</option>
                              <option value="Malappuram">Malappuram</option>
                              <option value="Kozhikode">Kasargodu</option>
                              <option value="Wayanad">Kannur</option>
                             <option value="Kannur">Wayanad</option>
                             <option value="Kasaragode">Kozhikod</option>
                             </select>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Address</label>
                                <textarea name="" id="" className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Pincode</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Village Office</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Add_Sub
