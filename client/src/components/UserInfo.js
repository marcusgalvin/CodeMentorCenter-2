import React, { Component } from 'react'
import axios from 'axios'
import User from './User';

class UserInfo extends Component {
    state = {
    userName: " ",
    result: " "
  }
  


getUserInfo = () => {
  console.log("state",this.state);
    console.log("props",this.props);
    this.setState({
      result: this.props.data
    })
    
axios.get("/showprofile/:username", function(req, res){    //:username is a parameter and a variable
   const user = req.params.username    //get username from paramater, inside the URL, store in const 'user'
    console.log(user)

    User.find({username:user}) //username is the key value is user
        .then(result => {
            console.log("Showing", user, "profile:", result)
            res.send(result)
        }).catch(err => {
            console.log(err)
        })

})


}



  render() {
    return (
      <div>
      <h2 style ={{margin: "10px", textAlign: "center"}}>- Search Our Data Base For Products -</h2>
        <div style ={{margin: "10px", textAlign: "center"}}className="App">

    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="User Name" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Search</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}

        </div>




         <div style ={{margin: "10px", textAlign: "center"}}className="App">

    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Artist Name" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Search</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}

        </div>




         <div style ={{margin: "10px", textAlign: "center"}}className="App">

    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Album Name" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Search</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}

        </div>





         <div style ={{margin: "10px", textAlign: "center"}}className="App">

    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="CD, Record, Cassette" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Search</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}

        </div>





         <div style ={{margin: "10px", textAlign: "center"}}className="App">

    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Genre" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Search</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}

        </div>





         <div style ={{margin: "10px", textAlign: "center"}}className="App">

    <input 
    onChange = { e => this.setState({
        
          userName: e.target.value
        
      })}
    placeholder="Price" 
    type="text" 
    />

    <button onClick={this.getUserInfo}>Search</button>  {/* use bracket notation to call a button/method*/}
<br />
        {this.state.result}    {/* all you need to display data on page + change the method getUserInfo + state*/}

        </div>
      </div>
    )
  }
}

export default UserInfo