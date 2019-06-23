import React, { Component } from 'react'
import axios from 'axios';

export default class AllUsers extends Component {


state = { 
  allUsers: [ ]
    // userName: " ",
    // message: " ",
    // artist: " ", 
    // album: " ",
    // productType: " " 
}

// const data = {
    
//   }


componentDidMount() {
        axios.get('/api')

      .then(res => {
        const allData = res.data;
        this.setState({ allData });
        this.State = allData
        console.log(allData);
        console.log(this.state)
        
      })
  }




// constructor(props) {
//       super(props);
//       this.state = {users: []};
//     }
//     componentDidMount(){
//       .then(response => {
//         this.setState({ users: response.data });
//         console.log(response.data)
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//     }




  render() {
    return (
      <div>


      <button>Get</button>
              

        
      </div>
    )
  }
}
