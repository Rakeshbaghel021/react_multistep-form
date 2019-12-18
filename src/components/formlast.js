import React from "react";

export default function Formlast(){
    return(
        <div className="main-div">
            <div className="add-user">
                <img className="add" src="add-user.png" alt=""/>
                <p className="add-user-heading">Create account for full access</p>
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
                 <label htmlFor="name"> Payment type</label>
                <button className="visa" ><img className="visa-img" src="visa.png" alt=""/></button>
                <button className="visa" ><img className="visa-img" src="mastercard.png" alt=""/></button>
                <button className="visa" ><img className="visa-img" src="paypal.png" alt=""/></button>
                   </div>
                   <div className="email-grp">
                   <label htmlFor="email"> Credit-card</label>
                  <input
                  className="form-control"
                   name="card"
                    type="text"
                   placeholder=""/><span className="cvc">CVC<input className="text-cvc"></input><img className="c-card" src="credit-card.png"alt=""/></span>
                   </div>
                   <div className="pass-grp">
                   <label htmlFor="password"> Expiration Date</label>
                  <input
                  className="form-control"
                   name="password"
                    type="text"
                   placeholder="Enter password"/>
                   <button className="check" type="checkbox"></button>
                   <p className="show" >show password</p>
                   </div>
                   <div className="avatar-grp">
                   <label htmlFor="password"> Name on card</label>
                  <input
                  className="form-control"
                   name="name"
                    type="text"
                   placeholder=""/>
                   </div>
                   
                </div>
                <hr/>
                <div className="step">
                    <div className="corner">
                        <button className="submit-btn">SUBMIT</button>
                        <span className="last">By submitting this form you agree with our</span><span className="terms"> Terms and Conditions</span>
                    </div>
                </div>
                </div>
       )
}