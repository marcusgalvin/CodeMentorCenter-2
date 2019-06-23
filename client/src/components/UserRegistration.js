import React, { Component } from 'react'
import axios from 'axios';

 class UserRegistration extends Component {


state = { 
    userName: " ",
    message: " ",
    artist: " ", 
    album: " ",
    productType: " " 
}

registerUser = () => {
    console.log(this.state);

  const data = {
    username: this.state.userName,
    message: this.state.message,
    artist: this.state.artist,
    album: this.state.album,
    productType: this.state.productType
  }

  axios.post("/api", data)
    .then(res => console.log(res.data))

    const newUser = "Name:" + this.state.userName + " | " + "Message: " +
    this.state.message + 
    this.state.artist +
    this.state.album +
    this.state.productType 
    this.props.setData(newUser);

}


 render() {
    return (
      <div
      id ="sellDiv" 
       style ={{margin: "10px", textAlign: "center"}}className="App"
       >
        
<h3>- What Would you Like to Sell? -</h3>
    <input
      className ="floating-placeholder"
    onChange={ e => this.setState({  userName: e.target.value })}
     placeholder="User Name" 
     type="text" 
     />
<br />
    <input 
    onChange= { e => this.setState({message: e.target.value })}
    placeholder="Condition" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({artist: e.target.value })}
    placeholder="Artist Name" 
    type="text" 
    />
<br />

    <input 
    onChange= { e => this.setState({album: e.target.value })}
    placeholder="Album Name" 
    type="text" 
    />
<br />

    <input 

    onChange= { e => this.setState({productType: e.target.value })}
    placeholder="(CD, Record, or Cassette)" 
    type="text" 
    />

<br />

    <button onClick={ this.registerUser }>Submit</button>

 </div>
    )
  }
}


export default UserRegistration