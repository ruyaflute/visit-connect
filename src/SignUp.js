import React from 'react';
import './App.css';

class SignUp extends React.Component {
     
  render() {
  return (
      <div classNamae= "wrapper">
          <div className="form-wrapper">
              <h1>Create Account</h1>
              <form onSubmit={this.handleSubmit} noValidate>
                  <div className="firstName">
                      <label htmlfor="firstName">First Name: </label>
                      <input type="text" 
                      className="" 
                      type="text"
                      name="firstName"
                        noValida
                        onChange={this.handleChange}
                        />
                  </div>
                  <div className="lastName">
                      <label htmlfor="lastName">Last Name: </label>
                      <input type="text" 
                      className=" " 
                      type="text"
                      name="lastName"
                        noValida
                        onChange={this.handleChange}
                        />
                  </div>
                  <div className="email">
                      <label htmlfor="email">Email: </label>
                      <input type="text" className=" " 
                      placeholder="email"
                      type="text"
                      name="email"
                        noValida
                        onChange={this.handleChange}
                        />
                  </div>
                  <div className="createAccount">
                      <button type="submit">Create Account</button>
                      <small>Already Have an Account?</small>
                  </div>
              </form>
          </div>
      </div>
  );
}
}

export default SignUp;