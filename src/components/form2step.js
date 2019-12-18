import React from "react";

export default function Form2step(){
    return(
        <div className="main-div">
            <div className="add-user">
                <img className="add" src="add-user.png" alt=""/>
                <p className="add-user-heading">Create account for full Details</p>
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
                 <label htmlFor="name"> Fullname</label>
                  <input
                  className="form-control"
                   name="email"
                    type="text"
                   placeholder=""/>
                   </div>
                   {/* <div className="email-grp">
                   <label htmlFor="email"> Email</label>
                  <input
                  className="form-control"
                   name="email"
                    type="text"
                   placeholder="Enter Email"/>
                   </div> */}
                   <div className="email-grp">
                   <label htmlFor="select"> Country</label>
                   <select>
                   <option selected value="Country">Country</option>
                        <option value="India">India</option>
                         <option value="Nepal">Nepal</option>
                        <option value="Country">Bhutan</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    </div>
                   <div className="pass-grp">
                   <label htmlFor="password"> Password</label>
                  <input
                  className="form-control"
                   name="password"
                    type="text"
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
                    <p className="foot">step 2 of 3</p>
                    <div className="corner">
                        <a className="cancel" href="#">cancel <span className="or">or</span></a>
                        <button className="next-btn">NEXT STEP</button>
                    </div>
                </div>
                </div>
       
    )
}