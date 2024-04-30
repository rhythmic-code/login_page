import React from 'react';

const Content = () => {
  return (
    <div className="begin">
      <h2 className="appname">Nexus Mind</h2>
      <div className="main">
        <div className="sometxt">
          <form className="formi">
            <div className="bckcolor">
              <h4>LOGIN PAGE</h4>
            
            <div className="fstrow space">
              <label htmlFor="fname" className="fstnm">Name:</label>
              <input type="text" id="fname" name="fname" className='x'/>
            </div>
            <div className="throw space">
              <label htmlFor="email" className="emailid">Email:</label>
              <input type="text" id="email" name="email" className='x'/>
            </div>
            <div className="fourow space">
              <label htmlFor="password" className="password">Password:</label>
              <input type="password" id="password" name="password" className='x' />
            </div>
            
            <div className="buttonclassName">
              <button type="submit" className="buton">Submit</button>
            </div>
            
            <div className="signforgot">
              <div className="signopt">
                <a className="colorSignup" href="https://www.google.com">Don't have an account</a>
              </div>
              <div className="forgot">
                Forgot password?
              </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Content;
