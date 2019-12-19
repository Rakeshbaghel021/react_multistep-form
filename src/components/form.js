import React from "react";

import { Link } from 'react-router-dom';

export default function Form({ data, handleChange, reset }){
    return(
        <div className="main-div">
            <div className="add-user">
                <img className="add" src="add-user.png" alt=""/>
                <p className="add-user-heading">Sign-up to create account</p>
                </div>
                <hr/>
                <div className="flex-all">
                <div className="account">
                    <h2 className="one">1</h2>
                    <span className="acc-info">Account<br/><span className="next">Information</span></span>
                </div>
                <div className="account">
                    <h2 className="one">2</h2>
                    <span className="acc-info">Personal<br/><span className="next">Information</span></span>
                </div>
                <div className="account">
                    <h2 className="one">3</h2>
                    <span className="acc-info">Payment<br/><span className="next">Details</span></span>
                </div>
                </div>
<hr/>
                <form>
                <div className="form-group">
                    <div className="name-grp">
                 <label htmlFor="name"> Username</label>
                  <input
                  className="form-control"
                   name="userName"
                    type="text"
                    value={data.userName}
                    onChange={handleChange}
                   placeholder="Enter username"/>
                   </div>
                   <div className="email-grp">
                   <label htmlFor="email"> Email</label>
                  <input
                  className="form-control"
                   name="email"
                    type="email"
                    value={data.email}
                    onChange={handleChange}
                   placeholder="Enter Email"/>
                   </div>
                   <div className="pass-grp">
                   <label htmlFor="password"> Password</label>
                  <input
                  className="form-control"
                   name="password"
                    type="password"
                    value={data.password}
                    onChange={handleChange}
                   placeholder="Enter password"/>
                   <button className="check" type="checkbox"></button>
                   <p className="show" >show password</p>
                   </div>
                   <div className="avatar-grp">
                   <label htmlFor="password"> Select avatar</label>
                  <input
                  className="form-control"
                   name="password"
                    type="file"
                   placeholder=""/>
                   </div>
                </div>
                <hr/>
                <div className="step">
                    <p className="foot">step 1 of 3</p>
                    <div className="corner">
                        <p className="can" onClick={reset}> cancel </p><span className="or"> or </span>
                        <Link to="/form2">
                            <button className="next-btn">NEXT STEP</button>
                        </Link>
                    </div>
                </div>
                </form>
                </div>
       
    )
}