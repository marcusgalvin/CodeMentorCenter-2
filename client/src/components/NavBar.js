import React, { Component } from 'react';  //add componets 
import AllUsers from './AllUsers';
import UserInfo from './UserInfo';
import UserRegistration from './UserRegistration';
import Browse from './Browse';
import About from './About';
import Contact from './Contact';
import Review from './Review';
import Buy from './Buy';
import Sell from './Sell';


 class NavBar extends Component {

state = {
  pageView: ""
}

// getAllUsers = () => {
//   this.setState ({
//     allUsers: this.state.data
//   })
//   this.forceUpdate()
// }

// updateData = (newData) => {
//   this.setState({
//     data: newData
//   })
// }


  render() {
    return (
      <div id ="wholeNavBar">

        <div id="header">
       



    <a
     style={{margin: "10px"}}
      href ="#"
          onClick={() => this.setState({ pageView:   <About data={this.state.data}/>  })}
      >About us - </a>

      





<a 
    style={{margin: "10px"}}
     href ="#"
               onClick={() => this.setState({ pageView:  <Review setAllUsers = {this.getAllUsers} data={this.state.data} />   })}
     >Credits - </a>

<br />




<a 
    style={{margin: "10px"}}
     href ="#"
               onClick={() => this.setState({ pageView:  <Buy setAllUsers = {this.getAllUsers} data={this.state.data} />   })}
     >Login -</a>


     <a 
    style={{margin: "10px"}}
     href ="#"
               onClick={() => this.setState({ pageView:  <Sell setAllUsers = {this.getAllUsers} data={this.state.data} />   })}
     >Sign up</a>




</div>



<div id ="state">
         {this.state.pageView}
</div>

      </div>
    )
  }
}

export default NavBar