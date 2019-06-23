//whatever we save to data base can be called using this function below
//*************************************************************** */ - search by username
function getUserInfo() {
  const input = document.getElementById("userName").value
  console.log(input);
  axios.get("/showprofile/" + input)
    .then(response => {
        

var myResponse = response.data
        for (var i = 0; i < myResponse.length; i++){
                var userSeller = myResponse[i].username
                var price = myResponse[i].price
                var message = myResponse[i].message
                var product = myResponse[i].product
                var artist = myResponse[i].artist
                var album = myResponse[i].album
                var genre = myResponse[i].genre

                if(userSeller) {
                  let productInfo = `<div id ="output"><p id="name"> Seller's User Name: ${userSeller}</p>
                    Condition: ${message} <br></br> Type: ${product} <br></br> Artist: ${artist} <br></br> Album Name: ${album} <br></br> Genre: ${genre} <br></br> Price: ${price} <br></br> </div>`
                    document.getElementById('userInfo').innerHTML += productInfo;
                }

        }

      // document.getElementById("userInfo").innerHTML = JSON.stringify(response.data)
    })
}

//*************************************************************** */ - search by album


function getAlbumInfo() {
  const input = document.getElementById("albumName").value
  console.log(input);
  axios.get("/showalbum/" + input)
    .then(response => {

      var myResponse = response.data
        for (var i = 0; i < myResponse.length; i++){
                var userSeller = myResponse[i].username
                var price = myResponse[i].price
                var message = myResponse[i].message
                var product = myResponse[i].product
                var artist = myResponse[i].artist
                var album = myResponse[i].album
                var genre = myResponse[i].genre

                if(userSeller) {
                  let productInfo = `<div id ="output">Seller's User Name: ${userSeller}<br></br>
                    Condition: ${message} <br></br> Type: ${product} <br></br> Artist: ${artist} <br></br> <p id="name"> Album Name: ${album}</p> <br></br> Genre: ${genre} <br></br> Price: ${price} <br></br> </div>`
                    document.getElementById('albumInfo').innerHTML += productInfo;
                }

        }

        
      // document.getElementById("albumInfo").innerHTML = JSON.stringify(response.data)
    })
}

//************************************************************************ */ - search by artist

function getArtistInfo() {
  const input = document.getElementById("artistName").value
  console.log(input);
  axios.get("/showartist/" + input)
    .then(response => {


      var myResponse = response.data
        for (var i = 0; i < myResponse.length; i++){
                var userSeller = myResponse[i].username
                var price = myResponse[i].price
                var message = myResponse[i].message
                var product = myResponse[i].product
                var artist = myResponse[i].artist
                var album = myResponse[i].album
                var genre = myResponse[i].genre

                if(userSeller) {
                  let productInfo = `<div id ="output">Seller's User Name: ${userSeller}<br></br>
                    Condition: ${message} <br></br> Type: ${product} <br></br> <p id="name"> Artist: ${artist}</p> <br></br> Album Name: ${album} <br></br> Genre: ${genre} <br></br> Price: ${price} <br></br> </div>`
                    document.getElementById('artistInfo').innerHTML += productInfo;
                }

        }
        
      // document.getElementById("artistInfo").innerHTML = JSON.stringify(response.data)
    })
}

//********************************************************* */ - search by type of music


function getProductInfo() {
  const input = document.getElementById("productName").value
  console.log(input);
  axios.get("/showproduct/" + input)
    .then(response => {

        var myResponse = response.data
        for (var i = 0; i < myResponse.length; i++){
                var userSeller = myResponse[i].username
                var price = myResponse[i].price
                var message = myResponse[i].message
                var product = myResponse[i].product
                var artist = myResponse[i].artist
                var album = myResponse[i].album
                var genre = myResponse[i].genre

                if(userSeller) {
                  let productInfo = `<div id ="output">Seller's User Name: ${userSeller}<br></br>
                    Condition: ${message} <br></br> Type: <p id="name">${product}</p> <br></br> Artist: ${artist} <br></br> Album Name: ${album} <br></br> Genre: ${genre} <br></br> Price: ${price} <br></br> </div>`
                    document.getElementById('productInfo').innerHTML += productInfo;
                }

        }

      // document.getElementById("productInfo").innerHTML = JSON.stringify(response.data)
    })
}


//******************************************************/ - show list of all items available to sell
function getAllUsers() {
    axios.get('/getallusers') 
        .then(response => {
            var dataResponse = response.data
            for (var i = 0; i < dataResponse.length; i++) {
                var userSeller = dataResponse[i].username
                var price = dataResponse[i].price
                var message = dataResponse[i].message
                var product = dataResponse[i].product
                var artist = dataResponse[i].artist
                var album = dataResponse[i].album
                var genre = dataResponse[i].genre
                if (price) {
                    let display = `<div id ="output"><p id="name"> Seller's User Name: ${userSeller}</p>
                    Condition: ${message} <br></br> Type: ${product} <br></br> Artist: ${artist} <br></br> Album Name: ${album} <br></br> Genre: ${genre} <br></br> Price: ${price} <br></br> </div>`
                    document.getElementById('result').innerHTML += display;
                }
            }
        })
}



//****************************************************************/ - save user input to the DB
function handleSubmit(){
    const userName = document.getElementById("user-name").value;
    const price = document.getElementById("price").value;
    const message = document.getElementById("message").value;
    const product = document.getElementById("product").value;
    const artist = document.getElementById("artist").value;
    const album = document.getElementById("album").value;
    const genre = document.getElementById("genre").value;

    const payload = {
        username: userName,
        price,
        message,
        product,
        artist,
        album,
        genre
    }
    axios.post("/api/", payload)
    .then(response => {
        console.log(response.data)
    })
}
