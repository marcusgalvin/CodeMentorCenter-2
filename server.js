const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const keys = require('./keys');


//connect to mongoose
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true}).then(()=> console.log("Mongo DB Connected"));


app.use(bodyParser.json());
//by default its usuing root ROUTE, which is "/"
app.use('/', express.static("public"));  

app.get('/', function(req, res) {
 res.send('Hello CMD!')
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))