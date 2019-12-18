import React from "react";

export default function Form(){
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
                <div className="form-group">
                    <div className="name-grp">
                 <label htmlFor="name"> Username</label>
                  <input
                  className="form-control"
                   name="email"
                    type="text"
                   placeholder="Enter username"/>
                   </div>
                   <div className="email-grp">
                   <label htmlFor="email"> Email</label>
                  <input
                  className="form-control"
                   name="email"
                    type="text"
                   placeholder="Enter Email"/>
                   </div>
                   <div className="pass-grp">
                   <label htmlFor="password"> Password</label>
                  <input
                  className="form-control"
                   name="password"
                    type="text"
                   placeholder="Enter password"/>
                   </div>
                   <div className="avatar-grp">
                   <label htmlFor="password"> select avatar</label>
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
                        <a href="#">cancel <span>or</span></a>
                        <button className="next-btn">NEXT STEP</button>
                    </div>
                </div>
                </div>
       
    )
}