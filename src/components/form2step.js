import React from "react";

import { Link } from 'react-router-dom';

export default function Form2step({ data, handleChange }){
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
                   name="fullName"
                    type="text"
                    defaultValue={data.fullName}
                    onChange={handleChange}
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
                   <option selected defaultValue={data.fullName} onChange={handleChange}>Country</option>
                        <option value="India">India</option>
                         <option value="Nepal">Nepal</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Kenya">Kenya</option>
                    </select>
                    </div>
                   <div className="pass-grp">
                   <label htmlFor="gender"> Gender</label>

                  
                   <button className="checkgen" ><img className="man" src="standing-up-man-.png" alt="" /> Male</button>
                   <button className="checkgen" ><img className="woman" src="woman.png" alt="" /> Female</button>
                   </div>


                   <div className="text-grp">
                 <label for ="about">About you</label>
                  <textarea className="area" name="about" defaultValue={data.about} onChange={handleChange} placeholder="Leave your message here about enquiry" rows="7" cols="40"/>
                  
                   </div>
                   <div>
                      <a  className="code" href ="#" >HTML code <span className="allow">allowed</span></a>
                  </div>
                </div>
                <hr/>
                <div className="step">
                    <p className="foot">step 2 of 3</p>
                    <div className="corner">
                        <Link to="/">Back</Link><span className="or">or</span>
                        <Link to="/form-last">
                            <button className="next-btn">NEXT STEP</button>
                        </Link>
                    </div>
                </div>
                </div>
       
    )
}