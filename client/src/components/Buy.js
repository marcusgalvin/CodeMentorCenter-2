import React, { Component } from 'react'

export default class Buy extends Component {
  render() {
    return (
      

      <div>
      <h2>Log in!</h2>


<div className="container">
  <form>
    <div className="row">
      <h2 style={{textAlign:'center'}}>Login with Social Media or Manually</h2>
      <div className="vl">
        <span className="vl-innertext">or</span>
      </div>

      <div className="col">
                <a href="#" className="github btn"><i className="fa fa-google fa-fw">
          <img src={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"} alt="Avatar" className="avatar"/>
          </i> Login with GitHub
        </a>
        <a href="#" className="linkedin btn">
<img src={"https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"} alt="Avatar" className="avatar"/>
<i className="fa fa-linkedin fa-fw">
</i> Login with LinkedIn
         </a>
        <a href="#" className="fb btn">
<img src={"https://www.freeiconspng.com/uploads/facebook-f-logo-white-background-21.jpg"} alt="Avatar" className="avatar"/>
<i className="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" className="twitter btn">
          <img src={"https://www.pngfind.com/pngs/m/123-1234348_twittericon-twitter-round-logo-png-transparent-background-png.png"} alt="Avatar" className="avatar"/>
          <i className="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>

        <a href="#" className="google btn">
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCHugK6Yju9favZ0S2AC8y8rzlprMz1Mo9pXCf8AbCLTwd9BS"} alt="Avatar" className="avatar"/>
          <i className="fa fa-google fa-fw"></i> Login with Google
        </a>
      </div>

      <div className="col">
        <div className="hide-md-lg">
          <p>Or sign in manually:</p>
          </div>

<input type="text" name="firstname" placeholder="First name" required/>
<input type="text" name="lastname" placeholder="Last name" required/>
<input type="text" name="username" placeholder="Username or email" required/>
<input type="password" name="password" placeholder="Password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
<input type="submit" value="Log in"/>
</div>
      
    </div>
  </form>
</div>

<div className="bottom-container">
  <div className="row">
    <div className="col">
      <a href="#" style={{color:'white'}} className="btn">Don't have an account? Sign up</a>
    </div>
    <div className="col">
      <a href="#" style={{color:'white'}} className="btn">Forgot password?</a>
    </div>
  </div>
</div>

      </div>
    )
  }
}
